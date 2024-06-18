let express = require('express');
let productRouter = express.Router({}); //

let ProductDataModel = require('../DataModels/ProductDataModel'); //this gives access to all the methods defined in mongoose to access mongo db data

productRouter.post('/api/updateProductRating', async (req, res) => {
  try {
    const { productId, newRating } = req.body;

    // Find the existing product
    const existingProduct = await ProductDataModel.findOne({ _id: productId });

    if (existingProduct) {
      const { rating, reviewCount } = existingProduct;
      const newReviewCount = reviewCount + 1;
      const newAverageRating =
        (rating * reviewCount + newRating) / newReviewCount;

      // Update the product's rating and review count
      existingProduct.rating = newAverageRating;
      existingProduct.reviewCount = newReviewCount;

      // Save the updated product
      await existingProduct.save();

      res.status(200).json({
        message: 'Product rating updated successfully',
        product: existingProduct,
      });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.error('Error updating product rating:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//we'll accept the user object as req.body, use it to map with user.schema key value pair
//initialize the userModel, if no validation error, then use the mongoose method to save user
productRouter.post('/api/saveproduct', (req, res) => {
  //localhost:9000/user/api/signinup
  console.log(req.body); //json data posted from API in body
  //initialize the userSchema

  ProductDataModel.findOne({ productName: req.body.productName })
    .then((existingProduct) => {
      if (existingProduct) {
        console.log('already existing product ', existingProduct);
        res.send(existingProduct);
      } else {
        //if user object is not present in users collection so we need to create
        //new user and this is sign up

        let newProduct = new ProductDataModel(req.body);

        newProduct
          .save()
          .then((newProduct) => {
            //will get _id once document is created
            console.log('created product', newProduct);
            res.send(newProduct);
          })
          .catch((err1) => {
            console.log('err product', err1);
            res.send('error while creating product');
          });
      }
    })
    .catch((err) => {
      console.log('err sign in', err);
      res.send('error while searching user sign in');
    });
});

//code to fetch all the users from user collection and return back
productRouter.get('/api/getProducts', (req, res) => {
  ProductDataModel.find()
    .then((allproducts) => {
      res.send(allproducts);
    })
    .catch(() => {
      res.send('error while fetching users');
    });
});

module.exports = productRouter;
