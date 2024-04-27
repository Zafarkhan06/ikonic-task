import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { getToken } from "../../helpers/getToken";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";


const validationSchema = Yup.object().shape({
  name: Yup.string().required("Title is required"),
  comment_content: Yup.string().required("Please select an option"),
});

const initialValues = {
  name: "",
  comment_content: "",
};

const Comment = ({ subServicesData, serviceName, navigateBack }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.app);
  const [commentData, setCommentData] = useState([]);
  const user_id = user?.id;
  const [showCommentForm, setShowCommentForm] = useState(false); // State to control visibility of comment form
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/api/get-comments?feedback_id=${subServicesData.id}`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setCommentData(response.data); // Set feedback data received from the backend
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("the comments here", commentData);
  }, []);
  console.log("feedback id", subServicesData.id);

  const onSubmit = (values, formikHelpers) => {
    const payload = {
      ...values,
      user_id: user_id,
      feedback_id: subServicesData.id,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/api/add-comments`, payload, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        console.log(response);
        toast.success("Comment added successfully!");
        navigateBack(false);
        // handle success
      })
      .catch((error) => {
        console.error(error);
        // handle error
      })
      .finally(() => {
        formikHelpers.setSubmitting(false); // Ensure setSubmitting is called even on error
      });
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const noComments = commentData.length === 0;

  return (
    <div className="bg-white rounded-lg mt-3 px-3 md:px-10 py-7">
        <div className="flex justify-start mt-2 mb-4"><Button variant="contained" onClick={() => navigateBack(false)}>
        {" "}
        go back
      </Button></div>
      
      <div>
        <div className="flex justify-between items-center">
          <div>
            <p className="md:text-lg md:font-medium text-start">Feedback category</p>
            <p className="md:text-2xl  md:font-semibold text-start">
              {subServicesData.category}
            </p>
          </div>

          <div className="text-end">
            <p className="md:text-lg md:font-medium">Feedback Added By</p>
            <p className="md:text-2xl md:font-semibold ">
              {subServicesData.user_name}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className="md:text-lg font-medium">Title</p>
          <p className="md:text-2xl font-semibold ">{subServicesData.title}</p>
          <div className="mt-5">
            <p className="text-lg font-medium text-start">description</p>
            <div className="mt-3 border rounded-md px-4 py-3 w-full min-vh-40">
              <p className="md:text-lg font-normal text-start">
                {subServicesData.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <Button
          variant="contained"
          onClick={() => setShowCommentForm(!showCommentForm)}
        >
          {showCommentForm ? "Hide Comment" : "Add Comment"}
        </Button>{" "}
      </div>
      {!noComments &&
        commentData.map((comment) => (
          <div key={comment.id} className="mt-5 px-5 py-4 rounded-lg border">
            <div className="text-start">
              <div className="flex justify-between">
                <p>Comment added by: {comment.name}</p>
                <p>Date: {formatDate(comment.created_at)}</p>
              </div>
              <ReactMarkdown>{comment.comment_content}</ReactMarkdown>
            </div>
          </div>
        ))}
      {showCommentForm && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="mt-5 px-5 py-4 rounded-lg border">
                <Field
                  name="name"
                  label="Name"
                  as={TextField}
                  fullWidth
                  error={errors.name && touched.name}
                  helperText={touched.name && errors.name}
                />

                <Field
                  sx={{ mt: 3, mb: 3 }}
                  name="comment_content"
                  label="Write Comment"
                  as={TextField}
                  multiline
                  rows={4}
                  fullWidth
                  error={errors.comment_content && touched.comment_content}
                  helperText={touched.comment_content && errors.comment_content}
                />
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Enter Comment
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Comment;
