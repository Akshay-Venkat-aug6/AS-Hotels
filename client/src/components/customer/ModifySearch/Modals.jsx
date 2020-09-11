import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const  Modals = ({show, handleClose, handleShow}) => {
  let query = useQuery();
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize: "16px", fontWeight: "600"}}>Modify Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display: "flex"}}>
            <div>
            <TextField id="standard-basic" label="Location" defaultValue={query.get('partcode')} onChange={ (e) => sessionStorage.setItem('partcode', e.target.value) } />
            </div>
            <div style={{paddingLeft: "20px"}}>
              <TextField
                id="date"
                label="Check In Date"
                type="date"
                value={query.get('checkIn')}
                onChange={ (e) => sessionStorage.setItem('checkIn', e.target.value) }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div style={{paddingLeft: "20px"}}>
              <TextField
                id="date"
                label="Check Out Date"
                type="date"
                value={query.get('checkOut')}
                onChange={ (e) => sessionStorage.setItem('checkOut', e.target.value) }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div style={{display: "flex", paddingTop: "20px"}}>
            <div>
              <TextField id="standard-basic" label="Adult No" onChange={ (e) => sessionStorage.setItem('noofadult', e.target.value) }  defaultValue={query.get('noofadult')} />
            </div>
            <div style={{paddingLeft: "20px"}}>
              <TextField id="standard-basic" label="Room No" defaultValue={query.get('noofrooms')} onChange={ (e) => sessionStorage.setItem('noofrooms', e.target.value) }/>
            </div>
          </div>
          <div style={{paddingTop: "15px"}}>
            <Button variant="danger" onClick={handleClose}>
              Search Again
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals