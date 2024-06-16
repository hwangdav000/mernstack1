let express = require('express');
let reviewRouter = express.Router({}); //

let ReviewDataModel = require('../DataModels/ReviewDataModel'); //this gives access to all the methods defined in mongoose to access mongo db data

//we'll accept the user object as req.body, use it to map with user.schema key value pair
//initialize the userModel, if no validation error, then use the mongoose method to save user
reviewRouter.post('/api/saveReviews', async (req, res) => {
  try {
    let reviews = req.body.reviews;
    // Save each review using Promise.all
    const savedReviews = await Promise.all(
      reviews.map((review) => {
        return ReviewDataModel.create(review); // Create a new review document for each item in the array
      })
    );

    console.log('Saved reviews:', savedReviews);

    // Respond with success message and saved reviews
    res
      .status(201)
      .json({ message: 'Reviews saved successfully', reviews: savedReviews });
  } catch (error) {
    console.error('Error saving reviews:', error);
    res.status(500).json({ error: 'Failed to save reviews' });
  }
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

//code to fetch all the users from user collection and return back
reviewRouter.get('/api/getReviews/:productId', (req, res) => {
  const productId = req.params.productId;
  ReviewDataModel.find({ productId: productId })
    .then((reviews) => {
      if (reviews) {
        res.send(reviews);
      } else {
        console.log('reviews not found');
      }
    })
    .catch((err) => {
      console.log('err review', err);
      res.send('error while getting reviews');
    });
});

module.exports = reviewRouter;
