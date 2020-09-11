import React from 'react';
import SignupDetails from '../../../components/customer/credentials/SignupDetails';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SignDetails = () => {
  const history = useHistory()
  return(
    <>
      <Helmet>
        <title>
          User Details Page
        </title>
      </Helmet>
      <div>
        { sessionStorage.getItem('isOtpValid') ? 
          <SignupDetails />
          :
          history.push('/user/signup')
        }
        
      </div>
    </>
  )
};

export default SignDetails