import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { brandStyles } from './Brand.style';

const Brand = () => {
  const {brand, brand__icon, brand__name__text__box, brand__name__castle, brand__name__photography} = brandStyles();
  return (
    <Link to="/">
      <Box display="flex" alignItems="center" className={brand}>
        <FontAwesomeIcon icon={faFortAwesome} className={brand__icon} />
        <Box className={brand__name__text__box}>
          <Box className={brand__name__castle}>Castle</Box>
          <Box className={brand__name__photography}>Photography</Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Brand;