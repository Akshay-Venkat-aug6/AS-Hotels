import React from 'react';
import Header from '../../../components/customer/credentials/HeaderContent';
import Signin from '../../../components/customer/credentials/Signin';
import { Helmet } from 'react-helmet';

const SigninPage = () => {
  return(
    <>
      <Helmet>
        <title>
          Login Page
        </title>
      </Helmet>
      <div>
        <Header 
          title = "Welcome  to AS Hotel!!"
          body = "Please Login/Register using your Email to continue"
        />
        <Signin />
      </div>
    </>
  )
};

export default SigninPage;