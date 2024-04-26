import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  service_type: Yup.string().required("Service Type is required"),
  headcount: Yup.string().required("Head Count is required"),
  cuisine_type: Yup.string().required("Cuisine Type is required"),
  city: Yup.string().required("City is required"),
  description: Yup.string().required("Description is required"),
});

function SelectLabels({ options, value, onChange, labels, placeholder }) {
  return (
    <div className="flex flex-col justify-center items-start">
      <p className="text-start font-base mb-1 text-[#323338] ">{labels}</p>
      <FormControl sx={{ width: "100%" }}>
        <Select
          sx={{ color: "#676879" }}
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem sx={{ color: "#676879" }} value="">
            <em>{placeholder}</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              sx={{ color: "#676879" }}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const FirstStep = ({ onNext }) => {
  const options = [
    { value: 10, label: "Option 1" },
    { value: 20, label: "Option 2" },
    { value: 30, label: "Option 3" },
  ];

  const placeholder = [
    "select service type",
    "select head count",
    "select cuisine type",
    "select city",
  ];

  const selectLabels = ["Service Type", "Head Count", "Cuisine Type", "City"];

  const formik = useFormik({
    initialValues: {
      service_type: "",
      headcount: "",
      cuisine_type: "",
      city: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      onNext(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Card
              sx={{
                paddingBottom: "1.5%",
                "& .MuiCardContent-root": { padding: "40px",px: "60px"  },
                borderRadius: "0.75rem",
                background: "white",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Box
                  sx={{ display: { xs: "block", md: "flex" }, gap: "2.5rem" }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[0]}
                      options={options}
                      placeholder={placeholder[0]}
                      value={formik.values.service_type}
                      onChange={(e) =>
                        formik.setFieldValue("service_type", e.target.value)
                      }
                    />
                    {formik.touched.service_type &&
                    formik.errors.service_type ? (
                      <div>
                        <p className="text-sm mt-1 text-red-700 text-start">
                          {formik.errors.service_type}
                        </p>
                      </div>
                    ) : null}
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[1]}
                      options={options}
                      placeholder={placeholder[1]}
                      value={formik.values.headcount}
                      onChange={(e) =>
                        formik.setFieldValue("headcount", e.target.value)
                      }
                    />
                    {formik.touched.headcount && formik.errors.headcount ? (
                      <div>
                        <p className="text-sm mt-1 text-red-700 text-start">
                          {formik.errors.headcount}
                        </p>
                      </div>
                    ) : null}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: { xs: "block", md: "flex" },
                    gap: "2.5rem",
                    mt: 3,
                  }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[2]}
                      options={options}
                      placeholder={placeholder[2]}
                      value={formik.values.cuisine_type}
                      onChange={(e) =>
                        formik.setFieldValue("cuisine_type", e.target.value)
                      }
                    />
                    {formik.touched.cuisine_type &&
                    formik.errors.cuisine_type ? (
                      <div>
                        <p className="text-sm mt-1 text-red-700 text-start">
                          {formik.errors.cuisine_type}
                        </p>
                      </div>
                    ) : null}
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[3]}
                      placeholder={placeholder[3]}
                      options={options}
                      value={formik.values.city}
                      onChange={(e) =>
                        formik.setFieldValue("city", e.target.value)
                      }
                    />
                    {formik.touched.city && formik.errors.city ? (
                      <div>
                        <p className="text-sm mt-1 text-red-700 text-start">
                          {formik.errors.city}
                        </p>
                      </div>
                    ) : null}
                  </Box>
                </Box>
                <Box
                  sx={{
                    "& .MuiTextField-root": { width: "100%" },
                    mt: 3,
                    width: "100%",
                  }}
                  autoComplete="on"
                >
                  <p className="text-start font-base mb-1 text-[#323338] ">
                    Description
                  </p>
                  <TextField
                    mt={1}
                    id="outlined-multiline-static"
                    placeholder="Please add service description"
                    multiline
                    rows={6}
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.description &&
                      Boolean(formik.errors.description)
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                    fullWidth
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div className="mt-8 flex justify-end">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#374C87",
              color: "#FFFFFF",
              fontWeight: 600,
              textTransform: "capitalize",
              px: 3,
              py: 1,
              fontSize: "16px",
              borderRadius: "4px",
            }}
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default FirstStep;
