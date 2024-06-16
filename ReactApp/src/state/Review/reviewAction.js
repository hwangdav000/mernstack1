//action - is an object with two properties - type and payload
import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const GetReviews = (Reviews) => {
  return {
    type: actionTypes.GET_REVIEWS,
    payload: Reviews,
  };
};

//server call
//to save user to mongo db and do sign-in or sign up
export const SaveReviewsToDB = (Reviews) => {
  return (dispatch) => {
    axios
      .post(
        'http://localhost:9000/review/api/saveReviews', //uri or end point of singninup api
        Reviews // the user state object we dispatch from the user component
      )
      .then((response) => {
        let loggedReview = response.data;
        console.log('logged data', loggedReview);
        //dispatch(AddReview(loggedReview));
        //alert('Review has been submitted');
      })
      .catch((err) => {
        console.log('error while saving', err);
      });
  };
};

export const getReviewsFromDB = (productId) => {
  return (dispatch) => {
    var path = 'http://localhost:9000/Review/api/getReviews/' + productId;
    axios
      .get(path)
      .then((response) => {
        const Reviews = response.data;
        dispatch(GetReviews(Reviews));
        console.log('get Review from db', Reviews);
      })
      .catch((error) => {
        console.error('Error fetching Review:', error);
      });
  };
};
