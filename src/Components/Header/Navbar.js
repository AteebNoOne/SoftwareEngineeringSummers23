import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import styles from './Navbar.module.css';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_button1}>
      <Button
        variant="contained"
      >
        <NavLink to="/">Home</NavLink>
      </Button>
      </div>
      <div className={styles.nav_button2}>
      <Button
        variant="contained"
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <NavLink >SDLC</NavLink>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/sdlc/agile">Agile</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/sdlc/spiral">Spiral</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/sdlc/waterfall">Waterfall</NavLink>
        </MenuItem>
      </Menu>
      </div>
    </div>
  );
}

export default Navbar;
