import React from "react";
import { SimpleGrid } from '@mantine/core';
import {ProductCard} from 'common/src/index';
import useStore from 'store/src/index';

const productsData = require('./data/products.json').products;

const ProductList = (props) => {    

    return (
        <SimpleGrid  breakpoints={[
            { minWidth: 'sm', cols: 2 },
            { minWidth: 'md', cols: 3 },
            { minWidth: 1200, cols: 4 },
          ]}>
            {
                productsData.map((product, i) => {
                    return (
                        <ProductCard
                            key={i}
                            path={product.thumbnail}
                            brand={product.brand}
                            description={product.description}
                            add={props.add}
                        />                                                    
                    );
                })
            }
        </SimpleGrid>
    );
};

export default ProductList;