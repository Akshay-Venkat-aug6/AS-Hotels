import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modals from './Modals';
import { useLocation, useHistory } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const ModifyButton = () => {
  let query = useQuery();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleSubmit = (props) => {
    let partcode = sessionStorage.getItem('partcode');
    let checkIn = sessionStorage.getItem('checkIn');
    let checkOut = sessionStorage.getItem('checkOut');
    let noofadult = sessionStorage.getItem('noofadult');
    let noofrooms = sessionStorage.getItem('noofrooms');
    if(!partcode){
      partcode = query.get('partcode')
    }
    if(!checkIn){
      checkIn = query.get('checkIn')
    }
    if(!checkOut){
      checkOut = query.get('checkOut')
    }
    if(!noofadult){
      noofadult = query.get('noofadult')
    }
    if(!noofrooms){
      noofrooms = query.get('noofrooms')
    }
    let search_details = {
      part: partcode,
      checkIn: checkIn,
      checkOut: checkOut,
      adultno: noofadult,
      rooms: noofrooms
    }
    const url = `/hotel-search/dom/search?checkIn=${search_details.checkIn}&checkOut=${search_details.checkOut}&noofadult=${search_details.adultno}&noofrooms=${search_details.rooms}&partcode=${search_details.part}`
    history.push(url)
    window.location.reload(false)
    setShow(false);
  }

  return (
    <div>
      <Button variant="contained" style={{fontSize: "10px"}} onClick={handleShow}>
        Modify Search
      </Button>
      <Modals handleShow={handleShow} handleClose={handleSubmit} show={show}/>
    </div>
  )
};

export default ModifyButton;