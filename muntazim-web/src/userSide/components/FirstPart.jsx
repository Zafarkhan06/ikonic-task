import React, { useState } from "react";
import round_1 from "../../asset/category/images/round-1.png";
import round_2 from "../../asset/category/images/round-2.png";
import round_3 from "../../asset/category/images/round-3.png";
import round_4 from "../../asset/category/images/round-4.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, Autocomplete, Button } from "@mui/material";
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
];
function FirstPart() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchFieldOnChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the dummy data based on the search query
    const filteredResults = dummyData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  const dummyData = [
    { id: 1, name: "John Doe", profession: "Plumber" },
    { id: 2, name: "Jane Smith", profession: "Electrician" },
    { id: 3, name: "Alice Johnson", profession: "Carpenter" },
    // Add more dummy data as needed
  ];
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-[48px]  font-medium text-start ">
          Let’s find your Muntazim team
        </h2>
        <p className="text-start">
          Search over 10,000 local professionals with reviews, pricing,
          <br />
          availability, and more
        </p>
        <div className="flex mt-5">
          <Autocomplete
            className="search-bar"
            disablePortal
            color="secondary"
            options={top100Films}
            sx={{
              width: 250,
              boxShadow: "0px 0px 10px 0px #00000040",
              borderRadius: "4px 0px 0px 4px",
            }}
            forcePopupIcon={false}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select your service"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Autocomplete
          
            className="search-bar2"
            disablePortal
            color="secondary"
            options={top100Films}
            sx={{ width: 250, boxShadow: "0px 0px 20px 0px #00000040",}}
            forcePopupIcon={false}
            renderInput={(params) => (
              <TextField
              className="search-bar2"
                placeholder="in Location"
                {...params}
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )}
          />
          <Button disableElevation variant="contained" sx={{px:4,borderRadius: "0px 4px 4px 0px", height: "50px",backgroundColor: "#273660" , '&:hover':{backgroundColor: "#273660"}}}>Search</Button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <LazyLoadImage height="70%" src={round_1} alt="round-1" />
          <LazyLoadImage src={round_2} alt="round-2" />
        </div>
        <div className="flex flex-col gap-1">
          <LazyLoadImage src={round_3} alt="round-3" />
          <LazyLoadImage src={round_4} alt="round-4" />
        </div>
      </div>
    </div>
  );
}

export default FirstPart;
