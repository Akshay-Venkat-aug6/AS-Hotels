import React from 'react';
import Header from '../../../components/customer/Normal/Header';
import Checkout from '../../../components/customer/Checkoutpage/Checkout';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CheckOutPage = () => {
  const isCustomer = (localStorage.getItem('isCustomer') === 'true');
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>
          Hotel CheckOut Page
        </title>
      </Helmet>
      { isCustomer ?
        <div>
          <Header />
          <div style={{marginTop: "90px"}}>
            <Checkout />
          </div>
        </div>
        :
        history.push('/user/signin')
      }
    </>
  )
};

export default CheckOutPage;