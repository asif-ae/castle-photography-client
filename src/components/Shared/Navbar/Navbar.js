import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import NavbarButton from '../../UI/NavbarButton/NavbarButton';

const myStyleee = makeStyles({
  myStyles: {
    boxShadow: '0px 1.5px 3px rgb(0 0 0 / 24%)',
  },
});

const Navbar = () => {
  const { myStyles } = myStyleee();
  return (
    <Box zIndex="appBar" position="sticky" top="0" bgcolor="common.white" className={myStyles}>
      <Box display="flex" alignItems="center" minHeight="50px" maxHeight="50px" height="50px">
        <nav>
          <NavbarButton>Home</NavbarButton>
          <NavbarButton>Services</NavbarButton>
          {/* <NavbarButton>Offers</NavbarButton> */}
          <NavbarButton>About</NavbarButton>
          <NavbarButton>Contact</NavbarButton>
        </nav>
      </Box>
    </Box>
  );
};

export default Navbar;