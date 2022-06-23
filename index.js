const express = require('express');
const path = require('path');

const product = express();
product.use(express.static(path.join(__dirname, 'products/dist')));
product.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'products/dist'));
  });
const port = process.env.PORT || 3001;
product.listen(port, () => {
    console.log('products app started at port ', port)
});


const wishList = express();
wishList.use(express.static(path.join(__dirname, 'wishlist/dist')));
wishList.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'wishlist/dist'));
  });
wishList.listen(3002, () => {
    console.log('wishlist app started at port 3002')
});
