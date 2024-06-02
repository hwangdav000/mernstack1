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

module.exports = cartRouter;
