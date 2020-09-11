import React from 'react';
import Header from '../../../components/customer/Normal/Header';
import HotelDetails from '../../../components/customer/Normal/HotelDetails';
import { Helmet } from 'react-helmet';

const HotelDetailsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Hotel Details | AS Service
        </title>
      </Helmet>
      <div>
        <Header />
        <div style={{paddingLeft: "100px", paddingRight: "100px", paddingTop: "70px"}}>
          <HotelDetails />
        </div>
      </div>
    </>
  )
};

export default HotelDetailsPage