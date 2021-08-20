import React, { Fragment } from 'react';
import Gallery from '../../Shared/Gallery/Gallery';
import HeaderTop from '../../Shared/HeaderTop/HeaderTop';
import Navbar from '../../Shared/Navbar/Navbar';

const Home = () => {
  return (
    <Fragment>
      <HeaderTop />
      <Navbar />
      <main>
        <Gallery />
      </main>
    </Fragment>
  );
};

export default Home;