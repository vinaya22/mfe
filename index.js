const express = require('express');
const path = require('path');

const product = express();
product.use(express.static(path.join(__dirname, 'products/dist')));
product.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'products/dist'));
  });
const port1 = process.env.PORT1 || process.env.PORT || 3001;
product.listen(port1, () => {
    console.log('products app started at port ', port1)
});


const wishList = express();
wishList.use(express.static(path.join(__dirname, 'wishlist/dist')));
wishList.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'wishlist/dist'));
  });
const port2 = process.env.PORT2 || 3001;
wishList.listen(port2, () => {
    console.log('wishlist app started at port ', port2)
});
