const initialState = {
  hotelname: '',
  address:'',
  price:'',
  rating:'',
  isFind: '',
  review: [],
  rooms: [],
  isReview: '',
  profile: '',
  isBooked: '',
  isRoomsAvailable: '',
  isBooking: '',
  isProfile: false,
  isUserBooked: '',
  username: ''
}

const detailsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'GET_HOTELDETAILS':
      if(action.payload.review){
        action.payload.review.map((list) => {
          state.review.push(list)
        })
      }
      
      if(action.payload.rooms.length != 0){
        action.payload.rooms.map(list => {
          state.rooms.push(list)
        })
      }
      console.log(state.review)
      return {
        ...state,
        hotelname: action.payload.details.companyname,
        address: action.payload.details.address+","+action.payload.details.city+","+action.payload.details.state,
        price: action.payload.details.price,
        rating: action.payload.details.rating,
        isFind: action.payload.details.isFind,
        isRoomsAvailable: action.payload.isAvailable,
        isUserBooked: action.payload.isUserBooked,
        username: action.payload.username,
        isReview: true
      }
    case 'GET_PROFILE':
      let isBooking;
      
      if(action.payload.profile.booking.length ){
        isBooking = true
      }
      return {
        ...state, 
        profile: action.payload.profile ,
        isBooking: isBooking,
        isProfile : action.payload.isProfile
      }
    case 'UPDATE_PROFILE':
      return state
    default:
      return state
  }
};

export default detailsReducer