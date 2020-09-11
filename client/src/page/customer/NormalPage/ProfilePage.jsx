import React from 'react';
import Header from '../../../components/customer/Normal/Header';
import Profile from '../../../components/customer/Profile/Profile';
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';

const ProfilePage = (props) => {
  const history = useHistory();
  var isTrueSet = (localStorage.getItem('isCustomer') === 'true');
  
  return (
    <div>
      <Helmet>
        <title>
          User Profile | AS Service
        </title>
      </Helmet>
      {isTrueSet ?
        <>
          <Header />
          <div style={{marginTop: "90px"}}>
            <Profile /> 
          </div>
        </>
        :
        history.push('/user/signin')
      }
    </div>
  )
};

export default ProfilePage;