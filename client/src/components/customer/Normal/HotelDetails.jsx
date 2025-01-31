import React, { useState } from 'react';
import BacktoSearch from '../HotelDetails/BacttoSearch';
import HotelBar from '../HotelDetails/HotelBar';
import HotelGallery from '../HotelDetails/HotelGallery';
import CheckAvailability from '../HotelDetails/CheckAvailability';
import Rooms from '../HotelDetails/Rooms';
import ReviewList from '../HotelDetails/ReviewList';
import Review from '../HotelDetails/Review';
import { connect } from 'react-redux';
import { GET_DETAILS } from '../../../store/customer/details/action';
import { bindActionCreators } from "redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HotelDetails = (props) => {
  const { id } = useParams();
  const [reviews, setreviews] = useState(JSON.parse(sessionStorage.getItem('reviews')))
  console.log(props.reviewlist)
  useEffect(() => {
    props.GET_DETAILS({ id: id });
  }, [])
  
  return (
    <div style={{paddingTop: "30px"}}>
      <BacktoSearch />
      <div style={{paddingTop: "10px"}}>
        <HotelBar />
      </div>
      <div style={{paddingTop: "50px"}}>
        <HotelGallery />
      </div>
      <div style={{paddingTop: "50px"}}>
        <Rooms rooms={props.rooms} isRoomAvailable={props.isAvailable}/>
      </div>
      <div style={{paddingTop: "50px"}}>
        <Review />
      </div>
      <div style={{paddingTop: "50px"}}>
        <ReviewList reviews={props.reviewlist} isReview={props.isReview}/>
      </div>
    </div>
  )
};

const mappingStateToProps = ({detail}) => {
  return { 
    reviewlist: detail.review,
    isReview: detail.isReview,
    isAvailable: detail.isRoomsAvailable,
    rooms: detail.rooms
  };
};

const mappingDispatchToProps = dispatch => {
  return bindActionCreators({ GET_DETAILS }, dispatch);
};

export default connect(
  mappingStateToProps,
  mappingDispatchToProps
)(HotelDetails);