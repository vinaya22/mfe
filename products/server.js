const express = require('express');
const path = require('path');

const product = express();
product.use(express.static(path.join(__dirname, './dist'), { index: 'index.html' }));

/*product.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, './dist'));
});

product.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist'));
}); */

const port1 = process.env.PORT1 || process.env.PORT || 3001;
product.listen(port1, () => {
    console.log('products app started at port ', port1)
});