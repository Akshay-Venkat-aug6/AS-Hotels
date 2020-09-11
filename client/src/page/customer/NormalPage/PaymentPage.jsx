import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const PaymentPage = () => {
  const history = useHistory();
  const handleBackSearch = () => {
    history.push('/')
  }

  return (
    <>
      <div style={{marginTop:"16%", marginLeft: "33%", fontSize: "30px"}}>
        Payment Completed Successfully!!!!!!!!
      </div>
      <div style={{textAlign: "center", marginTop: "20px"}}>
        <Button variant="contained" color="secondary" onClick={handleBackSearch}>
          Back To Search Page
        </Button>
      </div>
    </>
  )
};

export default PaymentPage;