import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { toast } from 'react-toastify';


import { start, stop } from "../features/appSlice";

const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('The email field is required'),
});

const ForgetPassword = () => {
    const { isLoading } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        const data = {
            email: values.email,
        };

        try {
            dispatch(start());

            const res = await axios.post(
                `${process.env.REACT_APP_URL}/api/forget-password`,
                data
            );

            dispatch(stop());
            toast.success(res?.data?.message);
        } catch (error) {
            dispatch(stop());
            toast.error(error?.response?.data?.message || JSON.stringify(error));
        }
    };

    return (
        <div className="background min-h-screen flex flex-col justify-between">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src="/assets/everwell_logo_main_tagless.png" alt="logo" className="h-20 w-20 object-contain" />
                </Link>
                <HelpOutlineIcon style={{ fontSize: 40 }} className="cursor-pointer" />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <img src="/assets/everwell_logo_main_tagless.png" alt="logo" className="h-20 w-20 object-contain" />
                    <div className="w-[80vw] md:w-[40vw] bg-blue p-10 flex flex-col gap-y-5 rounded-3xl">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl text-white">
                                Recover Password
                            </h1>
                        </div>
                        <Formik
                            initialValues={{
                                email: '',
                            }}
                            validationSchema={forgetPasswordSchema}
                            onSubmit={values => {
                                handleSubmit(values)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="space-y-3">
                                    <div className="flex flex-col items-start">
                                        <Field name="email" type="email" className={`p-2 w-full rounded-xl ${errors.email && touched.email ? 'border-red-600' : "border-slate-400"}`} placeholder="Email" />
                                        {errors.email && touched.email ?
                                            <div className="text-red-500 text-sm">{errors.email}</div> : null}
                                    </div>

                                    <button className='w-full bg-yellow dark:bg-slate-950 p-3 text-white rounded-xl font-bold' disabled={isLoading} type="submit">Submit</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <div>© Copyright 2023 MediVista Media, LLC. All Rights Reserved.</div>
        </div>
    );
};

export default ForgetPassword;
