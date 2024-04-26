import React, { useState, useEffect } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  MenuItem,
  FormControl,
  Select,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import { ServiceAvailabilityApi } from "../../services/apiService";
import { toast } from "react-toastify";

const SelectServices = ({ subServicesData, serviceName, navigateBack }) => {
  const { user } = useSelector((state) => state.app);
  // Modify the state for errors to track errors per subservice
  const [errors, setErrors] = useState({});
  const [hasNonEmptyRows, setHasNonEmptyRows] = useState(false); // Track whether there are non-empty rows

  const handleValidationError = (subserviceIndex, message) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [subserviceIndex]: message,
    }));
  };

  console.log("finding name", serviceName);

  // Clear the error for a subservice
  const clearValidationError = (subserviceIndex) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[subserviceIndex];
      return updatedErrors;
    });
  };
  // Initialize state for each subservice
  const [rows, setRows] = useState(
    subServicesData.reduce((acc, service, index) => {
      acc[index] = {
        sub_service_id: service.id,
        items: service.sub_services_type_items
          ? service.sub_services_type_items
              .filter(
                (item) =>
                  item.item_price.length > 0 && item.item_price[0].price !== ""
              ) // Filter items with non-empty price
              .map((item) => ({
                item_id: item.id,
                price: item.item_price[0].price,
              }))
          : [],
      };
      return acc;
    }, {})
  );

  console.log(
    "subservedata",
    subServicesData[1].sub_services_type_items[2].item_price
  );
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState({
    subserviceIndex: null,
    rowIndex: null,
    item_id: "",
    price: "",
  });
  const handleChange = (subserviceIndex, rowIndex, field) => (event) => {
    const newRows = { ...rows };
    newRows[subserviceIndex].items[rowIndex][field] = event.target.value;
    setRows(newRows);
    clearValidationError(subserviceIndex, rowIndex);
  };

  const addRow = (subserviceIndex) => {
    const newRows = { ...rows };
    const newItemIndex = Object.keys(newRows[subserviceIndex].items).length;
    newRows[subserviceIndex].items[newItemIndex] = {
      item_id: "",
      price: "",
    };
    setRows(newRows);
  };

  const removeRow = (subserviceIndex, rowIndex) => {
    const newRows = { ...rows };
    delete newRows[subserviceIndex].items[rowIndex];
    setRows(newRows);
  };

  const handleEditOpen = (subserviceIndex, rowIndex, item_id, price) => {
    setEditingRow({ subserviceIndex, rowIndex, item_id, price });
    setOpen(true);
  };

  const handleEditClose = () => {
    setOpen(false);
  };

  const handleEditSave = () => {
    const { subserviceIndex, rowIndex, item_id, price } = editingRow;
    const newRows = { ...rows };
    newRows[subserviceIndex].items[rowIndex] = { item_id, price };
    setRows(newRows);
    setOpen(false);
  };

  const handleSubmit = async () => {
    let hasErrors = false;

    // Validate each row in each subservice
    Object.keys(rows).forEach((subserviceIndex) => {
      const hasEmptyFields = rows[subserviceIndex].items.some(
        (item) => !item.item_id && !item.price
      );

      if (!hasEmptyFields) {
        const hasMissingItem = rows[subserviceIndex].items.some(
          (item) => !item.item_id
        );

        const hasMissingPrice = rows[subserviceIndex].items.some(
          (item) => !item.price
        );

        if (hasMissingItem) {
          handleValidationError(
            subserviceIndex,
            "Please fill in the item selection."
          );
          hasErrors = true;
        } else if (hasMissingPrice) {
          handleValidationError(subserviceIndex, "Please fill in the price.");
          hasErrors = true;
        } else {
          clearValidationError(subserviceIndex);
        }
      } else {
        clearValidationError(subserviceIndex);
      }
    });
    // If there are no validation errors and at least one non-empty row, proceed with the submission
    if (!hasErrors && hasNonEmptyRows) {
      // Filter out subservices with empty items arrays and rows with empty fields
      const filteredRows = Object.keys(rows).reduce((acc, subserviceIndex) => {
        const filteredItems = rows[subserviceIndex].items.filter(
          (item) => item.item_id && item.price
        );

        // Only include subservices that have at least one item with non-empty fields
        if (filteredItems.length > 0) {
          acc[subserviceIndex] = {
            ...rows[subserviceIndex],
            items: filteredItems,
          };
        }

        return acc;
      }, {});

      const payload = {
        user_id: user.id,
        service_id: subServicesData[0]?.services_type_id,
        data: filteredRows,
      };

      try {
        const response = await ServiceAvailabilityApi(payload);
        toast.success(response.data?.message);
        navigateBack();
        console.log("response", response);
      } catch (e) {
        console.log("error", e);
      }
    }
  };

  useEffect(() => {
    // Check if any rows exist and if there's at least one non-empty row
    const anyRowsExist = Object.values(rows).some(
      (row) => row.items.length > 0
    );
    const anyNonEmptyRowsExist = Object.values(rows).some((row) =>
      row.items.some((item) => item.item_id && item.price)
    );
    setHasNonEmptyRows(anyRowsExist && anyNonEmptyRowsExist);
  }, [rows]);

  console.log("rows", rows);

  return (
    <div>
      <div className="flex gap-2 items-center">
        <ArrowCircleLeftIcon onClick={navigateBack} sx={{ mouse: "pointer" }} />
        <p className="text-xl font-medium text-[#273660] text-start">
          {serviceName}
        </p>
      </div>
      {subServicesData.map((service, subserviceIndex) => (
        <div
          key={subserviceIndex}
          className="bg-white px-10 py-4 mt-10 rounded-xl"
        >
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium text-[#273660] text-start">
              {service?.name}
            </p>
            <CloseIcon />
          </div>
          <hr className="mt-5 mb-8" />

          <div className="grid px-10 py-3 grid-cols-3 rounded-[12px] bg-[#273660] items-center">
            <p className="text-white text-sm font-normal text-start">Name</p>
            <p className="text-white text-sm font-normal">Price (Pkr)</p>
            <p className="text-white text-sm font-normal text-end">Delete</p>
          </div>
          {Object.keys(rows[subserviceIndex].items).map((rowIndex) => (
            <div
              key={rowIndex}
              style={{ boxShadow: "0px 0px 10px 0px #0000000D" }}
              className="grid px-10 py-2 grid-cols-3 border-b items-start justify-start mt-3"
            >
              <FormControl className="service-select" fullWidth>
                <Select
                  value={rows[subserviceIndex].items[rowIndex].item_id}
                  onChange={handleChange(subserviceIndex, rowIndex, "item_id")}
                  displayEmpty
                >
                  <MenuItem value="">
                    <p className="text-xs text-[#676879] text-start mt-1">
                      Select starter
                    </p>
                  </MenuItem>
                  {subServicesData[
                    subserviceIndex
                  ]?.sub_services_type_items?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="text-center">
                <div className="flex justify-center">
                  <button
                    style={{ borderRadius: "8px 0px 0px 8px" }}
                    className="border border-[#C5C7D0] border-r-0 bg-[#D9D9D94D] rounded-[8px] px-2"
                  >
                    <RemoveIcon sx={{ fontSize: "16px", color: "#676879" }} />
                  </button>
                  <TextField
                    value={rows[subserviceIndex].items[rowIndex].price}
                    onChange={handleChange(subserviceIndex, rowIndex, "price")}
                    sx={{ width: "5rem" }}
                    type="number"
                    placeholder="00"
                    className="service-input"
                  />
                  <button
                    style={{ borderRadius: "0px 8px 8px 0px", outline: "none" }}
                    className="border flex items-center border-[#C5C7D0] border-l-0 bg-[#D9D9D94D] rounded-[8px] px-2"
                  >
                    <AddIcon sx={{ fontSize: "16px", color: "#676879" }} />
                  </button>
                </div>
              </div>
              <div className="text-end">
                <EditOutlinedIcon
                  onClick={() =>
                    handleEditOpen(
                      subserviceIndex,
                      rowIndex,
                      rows[subserviceIndex].items[rowIndex].item_id,
                      rows[subserviceIndex].items[rowIndex].price
                    )
                  }
                  sx={{ cursor: "pointer", marginRight: "20px" }}
                />
                <DeleteIcon
                  onClick={() => removeRow(subserviceIndex, rowIndex)}
                  sx={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ))}
          <div>
            {errors[subserviceIndex] && (
              <p className="text-red-500 mt-2">{errors[subserviceIndex]}</p>
            )}
          </div>

          <div className="flex mt-5 items-center gap-10">
            <Button
              onClick={() => addRow(subserviceIndex)}
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "#323338",
                textTransform: "none",
              }}
            >
              Add more
            </Button>
            <p>You can add up to 10 more dishes</p>
          </div>
        </div>
      ))}
      <div>
        {" "}
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!hasNonEmptyRows}
        >
          click here
        </button>
      </div>

      <Dialog fullWidth="lg" open={open} onClose={handleEditClose}>
        <div className="flex justify-end mt-2 pr-3">
          {" "}
          <CloseIcon sx={{ cursor: "pointer" }} onClick={handleEditClose} />
        </div>
        <DialogContent>
          <div className="flex pr-5 gap-5 justify-center items-center">
            <FormControl fullWidth>
              <p className="text-sm mb-2 text-[#323338]">Category Name</p>
              <Select
                value={editingRow.item_id}
                onChange={(e) =>
                  setEditingRow({ ...editingRow, item_id: e.target.value })
                }
                displayEmpty
              >
                <MenuItem value="">
                  <p className="text-xs text-[#676879] text-start mt-1">
                    Select starter
                  </p>
                </MenuItem>
                {subServicesData[
                  editingRow.subserviceIndex
                ]?.sub_services_type_items?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <p className="text-sm mb-2 text-[#323338]">Price</p>
              <TextField
                fullWidth
                value={editingRow.price}
                onChange={(e) =>
                  setEditingRow({ ...editingRow, price: e.target.value })
                }
                sx={{ width: "6rem" }}
                type="number"
                placeholder="00"
              />
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleEditSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SelectServices;
