import React from 'react';
import { useHistory } from 'react-router-dom';
import OtpCard from '../../../components/customer/credentials/OtpCard';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

const OtpPage = ({emailId}) => {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>
          OTP Page
        </title>
      </Helmet>
      { emailId ?
          <>
            <OtpCard />
          </>
        :
          history.push('/user/signup')
      }
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    emailId : state.user.emailId
  }
};

export default connect(
  mapStateToProps
)(OtpPage);