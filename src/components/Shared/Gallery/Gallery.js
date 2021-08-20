import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// Import Images
const myImage_1 = 'https://www.melbournephotography.com/static/uploads/images/04-wfuivxmrhjbq.jpg?height=470&mode=max&upscale=false&width=1110';
const myImage_2 = 'https://www.melbournephotography.com/static/uploads/images/banner-portrait1-wfwgpgszrqjh.jpg?height=468&mode=max&upscale=false&width=1110';
const myImage_3 = 'https://www.melbournephotography.com/static/uploads/images/banner-commercialv6-wfnnomyxbqwi.jpg?height=468&mode=max&upscale=false&width=1110';
const myImage_4 = 'https://www.melbournephotography.com/static/uploads/images/05-wfparnivmrcm.jpg?height=470&mode=max&upscale=false&width=1110';

const Gallery = () => {
  const imageStyles = makeStyles({
    image_1: {
      background: `url(${myImage_1})`,
    },
    image_2: {
      background: `url(${myImage_2})`,
    },
    image_3: {
      background: `url(${myImage_3})`,
    },
    image_4: {
      background: `url(${myImage_4})`,
    },
    imageClass: {
      width: '100%',
      height: '469px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
  });

  const { image_1, image_2, image_3, image_4, imageClass } = imageStyles();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      roundLengths
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Box className={`${imageClass} ${image_1}`}></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box className={`${imageClass} ${image_2}`}></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box className={`${imageClass} ${image_3}`}></Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box className={`${imageClass} ${image_4}`}></Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default Gallery;