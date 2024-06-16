let express = require('express');
let reviewRouter = express.Router({}); //

let ReviewDataModel = require('../DataModels/ReviewDataModel'); //this gives access to all the methods defined in mongoose to access mongo db data

//we'll accept the user object as req.body, use it to map with user.schema key value pair
//initialize the userModel, if no validation error, then use the mongoose method to save user
reviewRouter.post('/api/savereview', (req, res) => {
  //localhost:9000/user/api/signinup
  console.log(req.body); //json data posted from API in body
  //initialize the userSchema

  ReviewDataModel.findOne({ reviewName: req.body.reviewName })
    .then((existingReview) => {
      if (existingReview) {
        console.log('already existing review ', existingReview);
        res.send(existingReview);
      } else {
        //if user object is not present in users collection so we need to create
        //new user and this is sign up

        let newReview = new ReviewDataModel(req.body);

        newReview
          .save()
          .then((newReview) => {
            //will get _id once document is created
            console.log('created review', newReview);
            res.send(newReview);
          })
          .catch((err1) => {
            console.log('err review', err1);
            res.send('error while creating review');
          });
      }
    })
    .catch((err) => {
      console.log('err sign in', err);
      res.send('error while searching user sign in');
    });
});

//code to fetch all the users from user collection and return back
reviewRouter.get('/api/getReviews', (req, res) => {
  ReviewDataModel.find()
    .then((allreviews) => {
      res.send(allreviews);
    })
    .catch(() => {
      res.send('error while fetching users');
    });
});

module.exports = reviewRouter;
