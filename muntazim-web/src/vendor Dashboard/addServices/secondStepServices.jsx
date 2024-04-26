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
  ImageList,
  ImageListItemBar,
  ImageListItem,
  IconButton,
} from "@mui/material";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "At least one image is required"),
});

const SecondStep = ({ onNext, onBack,updateImages }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
    setError(false);

  };
  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleSubmit = () => {
    // Validate if at least one image is selected
    validationSchema.isValid({ images: selectedImages }).then((valid) => {
      if (valid) {
        // Send selected images to parent component
        updateImages(selectedImages);
        setError(false);
        onNext();
      } else {
        setError(true);
        // Handle validation errors
        console.log("At least one image is required");
      }
    });
  };
  return (
    <>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Card
            sx={{
              paddingBottom: "1.5%",
              "& .MuiCardContent-root": { padding: "30px",px: "60px"  },
              borderRadius: "0.75rem",
              background: "white",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <div className="flex justify-between items-center mt-1 mb-2">
                <p className=" text-start font-medium">Work Gallery</p>
                <p className=" text-start font-normal text-[#258750]">
                  You can add up to 30 items
                </p>
              </div>

              <Box mt={2}>
                <ImageList cols={6} gap={16} rowHeight={164}>
                  {selectedImages.map((image, index) => (
                    <ImageListItem key={index}>
                      <img
                        className="rounded-md"
                        src={URL.createObjectURL(image)}
                        alt={` ${index}`}
                        style={{ height: 164, objectFit: "cover" }}
                      />
                      <ImageListItemBar
                        key={index}
                        sx={{
                          borderTopLeftRadius: "6px",
                          borderTopRightRadius: "6px",
                          background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                            "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                        }}
                        position="top"
                        actionIcon={
                          <IconButton
                            sx={{ color: "white" }}
                            onClick={() => handleDeleteImage(index)}
                          >
                            <CancelSharpIcon />
                          </IconButton>
                        }
                        actionPosition="right"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
              <div className="mt-4 flex justify-center">
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  sx={{
                    backgroundColor: "#273660",
                    color: "white",
                    "&:hover": { backgroundColor: "#273660" },
                    px: 3,
                    py: 1,
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    borderRadius: "8px",
                  }}
                  tabIndex={-1}
                  endIcon={<CloudUploadIcon />}
                >
                  Upload Image
                  <VisuallyHiddenInput
                    type="file"
                    multiple
                    onChange={handleFileChange}
                  />
                </Button>
              </div>
              {error && (
                <p className="mt-1 text-red-600 text-sm text-center ">
                  {" "}
                  You should select atleast one image.
                </p>
              )}
              <div className="flex justify-center mt-5">
                <p className=" text-start font-normal text-[#323338] text-center">
                  Please upload photos & short videos only.
                </p>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div className="mt-8 flex justify-between">
        <Button
          onClick={onBack}
          sx={{
            backgroundColor: "white",
            color: "#323338",
            fontWeight: 600,
            textTransform: "capitalize",
            px: 3,
            py: 1,
            fontSize: "16px",
            borderRadius: "4px",
            boxShadow: "0px 1px 10px 0px #0000000D",
          }}
        >
          Back
        </Button>
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
          onClick={handleSubmit}
        >
          Next
        </Button>
      </div>
    </>
  );
};
export default SecondStep;
