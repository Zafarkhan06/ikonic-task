import React from "react";
import { TextField, Select, MenuItem, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
import { getToken } from "../../helpers/getToken";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Please select an option"),
  description: Yup.string().required("description is required"),
});

const initialValues = {
  title: "",
  category: "",
  description: "",
};



const EnterReview = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.app);
  const user_id = user?.id;

  const onSubmit = (values, { setSubmitting }) => {
    const payload = {
      ...values,
      user_id: user_id,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/api/feedback`, payload, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success("Feedback added successfully!");
        navigate("/dashboard/main");
        // handle success
      })
      .catch((error) => {
        toast.error("Something went wrong! please refresh and try again");

        console.error(error);
        // handle error
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="min-h-screen" >
          <Typography variant="h6">Form</Typography>
          <div className="flex mt-5 mb-5 flex-col md:flex-row gap-5 items-center">
            <Field
              name="title"
              label="Title"
              as={TextField}
              fullWidth
              error={errors.title && touched.title}
              helperText={touched.title && errors.title}
            />
            <Field
              name="category"
              as={Select}
              fullWidth
              error={errors.category && touched.category}
              helperText={touched.category && errors.category}
              displayEmpty
            >
              <MenuItem value="">Select a category</MenuItem>
              <MenuItem value="bug report">bug report</MenuItem>
              <MenuItem value="feature request">feature request</MenuItem>
              <MenuItem value="improvement">improvement</MenuItem>
            </Field>
          </div>

          <Field
            name="description"
            label="Description"
            as={TextField}
            multiline
            rows={4}
            fullWidth
            error={errors.description && touched.description}
            helperText={touched.description && errors.description}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 5 }}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EnterReview;
