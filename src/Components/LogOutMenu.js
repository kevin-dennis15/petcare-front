import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'js-cookie';

function LogOutMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    if(event.currentTarget.innerText==="My Profile"){
        navigate('/manageprofile');
    }
    else
     if(event.currentTarget.innerText==="Log Out"){
        Cookies.remove('token');
        navigate('/');
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span class="material-symbols-outlined size-header text-white">account_circle</span>
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
        
        <MenuItem onClick={(e)=>handleClose(e)}>My Profile </MenuItem>
        <MenuItem onClick={(e)=>handleClose(e)} >Log Out </MenuItem>
      </Menu>
    </div>
  );
}

export default LogOutMenu