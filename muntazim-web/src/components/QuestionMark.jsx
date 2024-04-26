import React, { useState } from 'react'

import { GrCircleQuestion } from "react-icons/gr";
import { Menu, MenuItem } from '@mui/material';

export default function QuestionMark() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <GrCircleQuestion size={30} onClick={handleClick} className="cursor-pointer dark:text-black" />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          1-877-732-5022 (M - F, 9am ET - 5pm ET)
        </MenuItem>
        <MenuItem>support@everwell.com</MenuItem>
      </Menu>
    </div>
  )
}
