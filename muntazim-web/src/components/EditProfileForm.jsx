import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from 'react-toastify';
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { updateProfile } from "../services/profileService";
import { setUser, start, stop } from "../features/appSlice";
import Spinner from "./Spinner";

const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('The name field is required').min(4, 'The name should be at least 5 characters long'),
    email: Yup.string().email('Invalid email').required('The email field is required'),
    password: Yup.string().required('The password field is required').min(8, 'The password should be at least 8 characters long'),
});

const EditProfileForm = ({ user }) => {
    const { isLoading } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    const handleSubmit = async (field) => {
        const data = {
            name: field.name ?? '',
            email: field.email ?? '',
            password: field.password ?? ''
        };

        dispatch(start());

        return updateProfile(data)
            .then((res) => {
                if (res) {
                    dispatch(setUser(res?.data?.data));
                    toast.success("Profile has been successfully updated");
                }
                dispatch(stop());
            })
            .catch((err) => {
                dispatch(stop());
                toast.error(err?.response?.data?.message);
            });
    };

    if (isLoading) {
        return (
            <div className="mt-5">
                <Spinner />;
            </div>
        );
    }

    return (
        <div className="col-span-2 mt-20 text-left">
            <h1 className="text-5xl font-semibold">Edit Profile</h1>

            <Formik
                initialValues={{
                    name: user?.name ?? '',
                    email: user?.email ?? '',
                    password: user?.password ?? '',
                }}
                validationSchema={ProfileSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className="space-y-3 mt-5 flex flex-col w-1/2 items-center gap-y-2">
                        <div className="flex flex-col items-start rounded w-full bg-gray-50 border border-gray-200">
                            <h1 className="pt-2 pl-3 text-gray-500">Name:</h1>
                            <Field name="name" type="text" className={`pl-3 pb-2 w-full bg-gray-50 font-semibold ${errors.name && touched.name ? 'border border-red-600' : "border-slate-400"}`} placeholder="Full Name" />
                            {errors.name && touched.name ?
                                <div className="text-red-500 text-sm">{errors.name}</div> : null}
                        </div>

                        <div className="flex flex-col items-start rounded w-full bg-gray-50 border border-gray-200">
                            <h1 className="pt-2 pl-3 text-gray-500">Email:</h1>
                            <Field name="email" type="email" className={`pl-3 pb-2 w-full bg-gray-50 font-semibold ${errors.email && touched.email ? 'border border-red-600' : "border-slate-400"}`} placeholder="Email" />
                            {errors.email && touched.email ?
                                <div className="text-red-500 text-sm">{errors.email}</div> : null}
                        </div>

                        <div className="flex flex-col items-start rounded w-full bg-gray-50 border border-gray-200">
                            <h1 className="pt-2 pl-3 text-gray-500">Password:</h1>
                            <Field name="password" type="password" className={`pl-3 w-full pb-2 bg-gray-50 font-semibold ${errors.password && touched.password ? 'border border-red-600' : "border-slate-400"}`} placeholder="Password" />
                            {errors.password && touched.password ?
                                <div className="text-red-500 text-sm">{errors.companyName}</div> : null}
                        </div>

                        <button className='bg-blue p-2 px-6 text-white text-center rounded-xl w-40 font-bold' disabled={isLoading} type="submit">Update</button>

                        {isLoading && <Spinner />}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditProfileForm;
