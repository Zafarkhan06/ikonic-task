import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  InputAdornment,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear"; // Import the clear icon
import frame_2 from "../../../asset/category/svg/page2_frame.svg";
import frame_5 from "../../../asset/category/images/frame-5.png";
import frame_6 from "../../../asset/category/images/frame_6.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "full",
      borderRadius: "6px",
      paddingLeft: "10px",
      paddingRight: "10px",
      boxShadow: "0px 0px 10px 0px #0000001A",
      marginTop: "0.5rem",
    },
  },
};
const names = [
  "Shadi Hall Services",
  "Royal Marquee",
  "Lavish Events",
  "Elegant Occasions",
  "Dreamy Weddings",
  "Grand Events",
  "Golden Moments Photography",
  "Magic Lens Photography",
  "Pixel Perfect Photography",
  "Royal Memories Photography",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelectChip({ handleServiceChange, selectedServices }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    handleServiceChange(value); // Pass selected services to parent component
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleClearSelection = () => {
    setPersonName([]);
    handleServiceChange([]); // Pass an empty array to clear the selected services
  };
  return (
    <div>
      <FormControl sx={{ width: "100%", marginTop: "0.7rem" }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          onOpen={handleMenuOpen}
          onClose={handleMenuClose}
          inputProps={{ IconComponent: () => null }} // this part
          input={
            <OutlinedInput
              id="select-multiple-chip"
              sx={{ borderRadius: "16px" }}
              endAdornment={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // Apply 180-degree rotation when menu is open
                    gap: "10px",
                  }}
                >
                  {personName.length > 0 && (
                    <ClearIcon
                      sx={{ color: "#676879" }}
                      className="cursor-pointer"
                      onClick={handleClearSelection}
                    />
                  )}
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: 35,
                      transform: isMenuOpen ? "rotate(180deg)" : "none",
                      color: "#676879",
                    }}
                  />{" "}
                  {/* Use the custom icon component */}
                </Box>
              }
            />
          }
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 0, pt: 0 }}
            >
              {selected.map((value) => (
                <Chip size="small" key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const SecondStep = ({
  onNext,
  onPrevious,
  handleServiceChange,
  selectedServices,
}) => {
  const [inputErrorPage2, setInputErrorPage2] = useState("");

  const handleNext = () => {
    if (selectedServices.length === 0) {
      setInputErrorPage2("Please select at least one service.");
      return; // Return early if there's an error
    } else {
      onNext();
    }
  };
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item xs={12} sm={11} md={9} lg={7} xl={7}>
        <div className="mt-7">
          <p className="text-xl text-black text-start ">
            What services your business is categorized into?
          </p>
          <MultipleSelectChip
            handleServiceChange={handleServiceChange} // Pass callback to update selected services
            selectedServices={selectedServices}
          />
          {inputErrorPage2 && (
            <div className="flex justify-start mt-3">
              <Typography
                sx={{ textAlign: "start" }}
                variant="caption"
                color="error"
              >
                {inputErrorPage2}
              </Typography>
            </div>
          )}
        </div>
        <div className="flex mt-10 justify-between">
          <Button
            color="secondary"
            sx={{ border: " 1px solid #C5C7D0" }}
            size="large"
            variant="outlined"
            onClick={onPrevious}
          >
            <span className="text-[#323338] capitalize">Previous</span>
          </Button>
          <Button
            onClick={handleNext}
            color="primary"
            sx={{
              backgroundColor: "#374C87",
              "&:hover": { backgroundColor: "#102a72" },
            }}
            size="large"
            variant="outlined"
          >
            <span className="text-white capitalize">Next</span>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default SecondStep;
