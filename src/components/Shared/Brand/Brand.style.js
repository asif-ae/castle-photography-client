import { makeStyles } from "@material-ui/core";

export const brandStyles = makeStyles({
  brand: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'linear-gradient(45deg, #3c096c 30%, #e0aaff 90%)',
    // Color Transparent
    color: 'transparent',

    // Background Clip
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
  },
  brand__icon: {
    fontSize: '3rem',
    color: '#3c096c',
  },
  brand__name__text__box: {
    textAlign: 'center',
    padding: '0 10px'
  },
  brand__name__castle: {
    fontSize: '3rem'
  },
  brand__name__photography: {
    letterSpacing: '3.8px',
    paddingLeft: '3px'
  }
});