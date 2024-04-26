import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

const AddServicesSchema = Yup.object().shape({
  food_name: Yup.string().required("The food name field is required"),
  price: Yup.number()
    .positive()
    .integer()
    .required("The price field is required"),
  category: Yup.string().required("1 category needs to be selected"),
});

function SelectLabels({ options, value, onChange, labels, placeholder }) {
  return (
    <div className="flex flex-col justify-center items-start">
      <p className="text-start font-base mb-1 text-[#323338] ">{labels}</p>
      <FormControl sx={{ width: "100%" }}>
        <Select
          color="secondary"
          sx={{ color: "#676879" }}
          value={value}
          onChange={onChange}
        >
          <MenuItem sx={{ color: "#676879" }} value="">
            <em>Select Category</em>
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

export default function ThirdStep({ onNext, onBack }) {
  const currencies = ["AED", "USD", "EURO", "RUPEES"];
  const [foodItems, setFoodItems] = useState([]);
  const [formData, setFormData] = useState({
    services: [],
  });
  const formik = useFormik({
    initialValues: {
      food_name: "",
      price: "",
      category: "",
      currency: "RUPEES",
    },
    validationSchema: AddServicesSchema,
    onSubmit: (values, { resetForm }) => {
      const newService = { ...values, id: formData.services.length };
      setFormData((prevData) => ({
        services: [...prevData.services, newService],
      }));
      resetForm();
    },
  });

  const handleNext = () => {
    onNext(formData.services);
  };

  const handleSubmit = async () => {
    try {
      await formik.validateForm();
      formik.submitForm(); // Proceed to the next step if the form is valid
    } catch (errors) {
      console.log("Validation errors:", errors);
      // Display validation errors if the form is invalid
    }
  };

  const options = [
    { value: 10, label: "Option 1" },
    { value: 20, label: "Option 2" },
    { value: 30, label: "Option 3" },
  ];

  const placeholder = ["select category"];

  const selectLabels = [
    "Category",
    "Type of cuisine",
    "Starter",
    "Main dishes",
    "Dessert",
    "Soft drinks",
    "Other",
    "salad",
    "yogurt",
    "Type of roti/naan",
  ];
  const label = ["zafar khan"];
  console.log("foods items", formData.services);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Card
              sx={{
                "& .MuiCardContent-root": { padding: "30px", px: "60px" },
                borderRadius: "0.75rem",
                background: "white",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <div className="mb-3">
                  <p className="text-start font-medium text-lg">
                    Add food items
                  </p>
                </div>
                <Box sx={{ width: "100%" }}>
                  <SelectLabels
                    labels={selectLabels[0]}
                    options={options}
                    placeholder={placeholder[0]}
                    value={formik.values.category}
                    onChange={(e) =>
                      formik.setFieldValue("category", e.target.value)
                    }
                  />

                  {formik.touched.category && formik.errors.category ? (
                    <FormHelperText error>
                      {formik.errors.category}
                    </FormHelperText>
                  ) : null}
                </Box>
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <p className="text-start font-normal text-base text-[#323338]">
                      Name
                    </p>
                    <TextField
                      sx={{ marginTop: "4px !important" }}
                      margin="normal"
                      fullWidth
                      type="text"
                      color="secondary"
                      id="food_name"
                      placeholder="Enter food name"
                      name="food_name"
                      value={formik.values.food_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.food_name &&
                        Boolean(formik.errors.food_name)
                      }
                      helperText={
                        formik.touched.food_name && formik.errors.food_name
                      }
                    />
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <p className="text-start text-base text-[#323338]">Price</p>
                    <FormControl
                      fullWidth
                      sx={{ marginTop: "1% !important" }}
                      onWheel={(e) => e.preventDefault()}
                    >
                      <TextField
                        onWheel={(e) => e.preventDefault()}
                        type="number"
                        color="secondary"
                        placeholder="Enter Your Price"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.price && Boolean(formik.errors.price)
                        }
                        helperText={formik.touched.price && formik.errors.price}
                        sx={{
                          "& .MuiInputBase-input": {
                            maxWidth: { xs: "60%", md: "78%" },
                          },
                        }}
                        InputProps={{
                          endAdornment: (
                            <FormControl
                              sx={{
                                width: { xs: "35%", md: "25%" },
                                position: "absolute",
                                right: "0",
                                background: "#f8f8f9",
                              }}
                            >
                              <Select
                                color="secondary"
                                sx={{
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none !important",
                                  },
                                }}
                                value={formik.values.currency} // Set the value to the formik state
                                onChange={formik.handleChange} // Handle currency change
                                name="currency" // Set the name for currency field
                              >
                                {currencies.map(
                                  (
                                    currency,
                                    index // Add index parameter
                                  ) => (
                                    <MenuItem key={index} value={currency}>
                                      {currency}
                                    </MenuItem> // Add key prop
                                  )
                                )}
                              </Select>
                            </FormControl>
                          ),
                        }}
                      />
                    </FormControl>
                  </Box>
                </Box>
                <div className="mt-5 flex justify-start">
                  <Button
                    sx={{
                      backgroundColor: "#374C87",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      px: 3,
                      py: 1,
                      fontSize: "16px",
                      borderRadius: "4px",
                      "&:hover": { backgroundColor: "#273660" },
                    }}
                    onClick={formik.handleSubmit}
                  >
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card
              sx={{
                "& .MuiCardContent-root": { padding: "30px", px: "60px" },
                borderRadius: "0.75rem",
                background: "white",
                boxShadow: "none",
                marginTop: "30px",
              }}
            >
              <CardContent>
                <div className="mb-5 mt-5">
                  <p className="text-start mb-2 font-medium text-lg">
                    Package 1
                  </p>
                  <hr />
                </div>
                <div className="mb-3">
                  <p className="text-start font-medium text-lg">
                    Basic Information
                  </p>
                </div>

                {/* Basic Information */}
                <Box sx={{ width: "100%" }}>
                  <p className="text-start font-normal text-base text-[#323338]">
                    Name
                  </p>
                  <TextField
                    sx={{ marginTop: "4px !important" }}
                    margin="normal"
                    fullWidth
                    type="text"
                    color="secondary"
                    id="servic_ename"
                    placeholder="Enter service name"
                    name="service_name"
                    value={formik.values.service_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.service_name &&
                      Boolean(formik.errors.service_name)
                    }
                    helperText={
                      formik.touched.service_name && formik.errors.service_name
                    }
                  />
                </Box>

                <Box
                  sx={{
                    "& .MuiTextField-root": { width: "100%" },
                    mt: 2,
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

                <div className="mt-10">
                  <p className="text-start font-semibold text-lg text-[#323338]">
                    Time availability
                  </p>
                </div>
                {/* time availability */}
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <p className="text-start font-normal text-base text-[#323338]">
                      Morning
                    </p>
                    <TextField
                      sx={{ marginTop: "4px !important" }}
                      margin="normal"
                      fullWidth
                      type="text"
                      color="secondary"
                      id="Morning"
                      placeholder="12:00 PM - 5:00 PM"
                      name="morning"
                      value={formik.values.Morning}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.Morning && Boolean(formik.errors.Morning)
                      }
                      helperText={
                        formik.touched.service_name &&
                        formik.errors.service_name
                      }
                    />
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <p className="text-start text-base text-[#323338]">
                      Evening
                    </p>
                    <TextField
                      sx={{ marginTop: "4px !important" }}
                      margin="normal"
                      fullWidth
                      type="text"
                      color="secondary"
                      id="evening"
                      placeholder="12:00 PM - 5:00 PM"
                      name="evening"
                      value={formik.values.evening}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.evening && Boolean(formik.errors.evening)
                      }
                      helperText={
                        formik.touched.evening && formik.errors.evening
                      }
                    />
                  </Box>
                </Box>
                <div className="flex justify-start">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Full time (12:00 PM to 11:00 PM)"
                  />
                </div>

                <div className="mt-10">
                  <p className="text-start font-semibold text-lg text-[#323338]">
                    Services & Inclusions
                  </p>
                </div>
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[1]}
                      options={options}
                      placeholder={placeholder[1]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[2]}
                      options={options}
                      placeholder={placeholder[2]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                </Box>
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[3]}
                      options={options}
                      placeholder={placeholder[3]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[4]}
                      options={options}
                      placeholder={placeholder[4]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                </Box>

                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[5]}
                      options={options}
                      placeholder={placeholder[5]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[6]}
                      options={options}
                      placeholder={placeholder[6]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                </Box>

                {/* addons items */}

                <div className="mt-10">
                  <p className="text-start font-semibold text-lg text-[#323338]">
                    Addon items
                  </p>
                </div>
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[7]}
                      options={options}
                      placeholder={placeholder[7]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[8]}
                      options={options}
                      placeholder={placeholder[8]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                </Box>
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[9]}
                      options={options}
                      placeholder={placeholder[9]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                </Box>
                <Box
                  sx={{
                    "& .MuiTextField-root": { width: "100%" },
                    mt: 2,
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

                {/* package price  */}
                <div className="mt-10">
                  <p className="text-start font-semibold text-lg text-[#323338]">
                    Package price & payments
                  </p>
                </div>
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <p className="text-start font-normal text-base text-[#323338]">
                      Current package offered
                    </p>
                    <TextField
                      sx={{ marginTop: "4px !important" }}
                      margin="normal"
                      fullWidth
                      type="text"
                      color="secondary"
                      id="Morning"
                      placeholder="Current package offered"
                      name="morning"
                      value={formik.values.Morning}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.Morning && Boolean(formik.errors.Morning)
                      }
                      helperText={
                        formik.touched.service_name &&
                        formik.errors.service_name
                      }
                    />
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <p className="text-start text-base text-[#323338]">
                      Current package price
                    </p>
                    <TextField
                      sx={{ marginTop: "4px !important" }}
                      margin="normal"
                      fullWidth
                      type="text"
                      color="secondary"
                      id="evening"
                      placeholder="Current package price"
                      name="evening"
                      value={formik.values.evening}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.evening && Boolean(formik.errors.evening)
                      }
                      helperText={
                        formik.touched.evening && formik.errors.evening
                      }
                    />
                  </Box>
                </Box>
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <p className="text-start font-normal text-base text-[#323338]">
                      Edited package price
                    </p>
                    <TextField
                      sx={{ marginTop: "4px !important" }}
                      margin="normal"
                      fullWidth
                      type="text"
                      color="secondary"
                      id="Morning"
                      placeholder="Edited package price"
                      name="morning"
                      value={formik.values.Morning}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.Morning && Boolean(formik.errors.Morning)
                      }
                      helperText={
                        formik.touched.service_name &&
                        formik.errors.service_name
                      }
                    />
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <SelectLabels
                      labels={selectLabels[8]}
                      options={options}
                      placeholder={placeholder[8]}
                      value={formik.values.category}
                      onChange={(e) =>
                        formik.setFieldValue("category", e.target.value)
                      }
                    />

                    {formik.touched.category && formik.errors.category ? (
                      <FormHelperText error>
                        {formik.errors.category}
                      </FormHelperText>
                    ) : null}
                  </Box>
                </Box>

                {/* vendor contact details */}

                <div className="mt-10">
                  <p className="text-start font-semibold text-lg text-[#323338]">
                    Vendor contact details
                  </p>
                </div>
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: "100%" }}>
                    <p className="text-start font-normal text-base text-[#323338]">
                      Vendor name
                    </p>
                    <TextField
                      sx={{ marginTop: "4px !important" }}
                      margin="normal"
                      fullWidth
                      type="text"
                      color="secondary"
                      id="Morning"
                      placeholder="Please enter your full name here"
                      name="morning"
                      value={formik.values.Morning}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.Morning && Boolean(formik.errors.Morning)
                      }
                      helperText={
                        formik.touched.service_name &&
                        formik.errors.service_name
                      }
                    />
                  </Box>
                </Box>
                <Box
                  mt={3}
                  sx={{ display: { xs: "block", md: "flex", gap: "2rem" } }}
                >
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <p className="text-start font-normal text-base text-[#323338]">
                      Phone
                    </p>
                    <TextField
                      sx={{ marginTop: "4px !important" }}
                      margin="normal"
                      fullWidth
                      type="text"
                      color="secondary"
                      id="Morning"
                      placeholder="Enter your Phone number"
                      name="morning"
                      value={formik.values.Morning}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.Morning && Boolean(formik.errors.Morning)
                      }
                      helperText={
                        formik.touched.service_name &&
                        formik.errors.service_name
                      }
                    />
                  </Box>
                  <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <p className="text-start text-base text-[#323338]">Email</p>
                    <TextField
                      sx={{ marginTop: "4px !important" }}
                      margin="normal"
                      fullWidth
                      type="text"
                      color="secondary"
                      id="evening"
                      placeholder="outlook@gmail.com"
                      name="evening"
                      value={formik.values.evening}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.evening && Boolean(formik.errors.evening)
                      }
                      helperText={
                        formik.touched.evening && formik.errors.evening
                      }
                    />
                  </Box>
                </Box>
                <div className="mt-5 flex justify-start">
                  <Button
                    sx={{
                      backgroundColor: "#374C87",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      px: 3,
                      py: 1,
                      fontSize: "16px",
                      borderRadius: "4px",
                      "&:hover": { backgroundColor: "#273660" },
                    }}
                    onClick={formik.handleSubmit}
                  >
                    Add Package
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </form>
      <div className="mt-5 flex justify-start">
        <Button
          sx={{
            backgroundColor: "#374C87",
            color: "#FFFFFF",
            fontWeight: 600,
            textTransform: "capitalize",
            px: 3,
            py: 1,
            fontSize: "16px",
            borderRadius: "4px",
            "&:hover": { backgroundColor: "#273660" },
          }}
          onClick={handleNext}
          disabled={formData.services.length === 0}
        >
          Next
        </Button>
      </div>
    </>
  );
}
