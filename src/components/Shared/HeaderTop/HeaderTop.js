import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Brand from '../Brand/Brand';

const myStyles = makeStyles({
  info: {
    color: '#7a7674',
    marginRight: '10px',
    fontSize: '18px',
  },
  info__icon: {
    fontSize: '30px',
  },
  info__property: {
    marginRight: '20px',
  },

  social: {
    color: '#7a7674',
    marginRight: '10px',
    fontSize: '18px',
    borderRadius: '50%',
    border: '2px solid #7a7674',
    padding: '5px',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .4s',
    boxSizing: 'border-box',
    cursor: 'pointer',
    
    '&:hover': {
      backgroundImage: 'linear-gradient(45deg, #3c096c 30%, #e0aaff 90%)',
      borderColor: 'white',
      transform: 'translateY(-3px) scale(1.4)',
      // borderColor: 'rgb(254, 182, 146)',
      // border: 'none',
      color: 'white',
    }
  },
  social__icon: {
    // 
  },
})

const HeaderTop = () => {
  const { info, info__icon, info__property, social, social__icon } = myStyles();
  return (
    <header>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box style={{padding: '5px 15px'}}>
          <Brand />
        </Box>
        <Box display="flex" alignItems="center">
          <Box className={info}><FontAwesomeIcon icon={faMobile} className={info__icon} /></Box>
          <Box className={`${info} ${info__property}`}>011 11 111 11</Box>
          <Box className={info}><FontAwesomeIcon icon={faMapMarkerAlt} className={info__icon} /></Box>
          <Box className={`${info} ${info__property}`}>8500 Beverly BLVD LA</Box>

          <Box className={social}><FontAwesomeIcon icon={faFacebookF} className={social__icon} /></Box>
          <Box className={`${social}`}><FontAwesomeIcon icon={faInstagram} className={social__icon} /></Box>
          <Box className={social}><FontAwesomeIcon icon={faTwitter} className={social__icon} /></Box>
          <Box className={`${social}`}><FontAwesomeIcon icon={faLinkedinIn} className={social__icon} /></Box>
        </Box>
      </Box>
    </header>
  );
};

export default HeaderTop;