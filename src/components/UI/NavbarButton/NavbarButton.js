import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const buttonStyles = makeStyles({
  navbarButtonClass: {
    color: '#7a7674',
    fontSize: '18px',
    margin: '0 auto',
    textAlign: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '2px 22px',
    position: 'relative',

    // Transitions
    transition: 'all .5s',
    WebkitTransition: 'all .5s',

    backgroundImage: 'linear-gradient(45deg, rgba(60, 9, 108, 1) 30%, rgba(224, 170, 255, 1) 90%)',

    // Background Clip
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    
    '&:hover': {
      color: 'transparent',
    },

    '&:not(:last-child)': {
      borderRight: '1px solid #7a7674',
    },
  },
});

const NavbarButton = ({ className, children }) => {
  const { navbarButtonClass } = buttonStyles();
  return <Box className={`${className} ${navbarButtonClass}`}>{children}</Box>;
};

export default NavbarButton;