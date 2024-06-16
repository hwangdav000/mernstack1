let express = require('express');
let cartRouter = express.Router({}); //

let CartDataModel = require('../DataModels/CartDataModel'); //this gives access to all the methods defined in mongoose to access mongo db data

cartRouter.post('/api/savecart', (req, res) => {
  console.log(req.body);

  // can overwrite cart
  CartDataModel.findOne({ userId: req.body.userId })
    .then((existingCart) => {
      if (existingCart) {
        console.log('Replace existing cart ', existingCart);

        existingCart.cartItems = req.body.cartItems;
        existingCart
          .save()
          .then((updatedCart) => {
            console.log('updated cart ', updatedCart);
            res.send(existingCart);
          })
          .catch((err1) => {
            console.log('error updating cart ', err1);
            res.send('error updating cart');
          });
      } else {
        //if cart object is not present

        let newCart = new CartDataModel(req.body);

        newCart.save().then((newCart) => {
          //will get _id once document is created
          console.log('created cart', newCart);
          res.send(newCart);
        });
      }
    })
    .catch((err) => {
      console.log('err', err);
      res.send('error while adding cart');
    });
});

//code to fetch all the users from user collection and return back
cartRouter.get('/api/getCart/:userId', (req, res) => {
  const userId = req.params.userId;

  CartDataModel.findOne({ userId: userId })
    .then((cart) => {
      if (cart) {
        console.log('got the fcart');
        res.send(cart.cartItems);
      } else {
        console.log('cart not found');
      }
    })
    .catch((err) => {
      console.log('err cart', err);
      res.send('error while getting cart');
    });
});

// clear cart
cartRouter.delete('/api/clearCart/:userId', (req, res) => {
  const userId = req.params.userId;

  // Find the cart associated with the user ID
  CartDataModel.findOne({ userId: userId })
    .then((cart) => {
      if (cart) {
        // Clear the cartItems array
        cart.cartItems = [];

        // Save the updated cart
        cart
          .save()
          .then((updatedCart) => {
            console.log('Cart cleared successfully');
            res.send(updatedCart);
          })
          .catch((err) => {
            console.log('Error clearing cart:', err);
            res.status(500).send('Error clearing cart');
          });
      } else {
        console.log('Cart not found for user:', userId);
        res.status(404).send('Cart not found');
      }
    })
    .catch((err) => {
      console.log('Error finding cart:', err);
      res.status(500).send('Error finding cart');
    });
});

module.exports = cartRouter;
