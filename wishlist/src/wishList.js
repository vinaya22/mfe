import React from "react";
import { SimpleGrid } from '@mantine/core';
import {ProductCard} from 'common/src/index';

const products = [
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",        
        "brand": "OPPO",        
        "thumbnail": "https://dummyjson.com/image/i/products/4/thumbnail.jpg",        
    },
    {
        "id": 7,
        "title": "Samsung Galaxy Book",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",        
        "brand": "Samsung",        
        "thumbnail": "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    },
];

const WishList = () => {
    return (
        <SimpleGrid  breakpoints={[
            { minWidth: 'sm', cols: 2 },
            { minWidth: 'md', cols: 3 },
            { minWidth: 1200, cols: 4 },
          ]}>
            {
                products.map((product, i) => {
                    return (
                        <ProductCard
                            key={i}
                            path={product.thumbnail}
                            brand={product.brand}
                            description={product.description}
                        />                                                    
                    );
                })
            }
        </SimpleGrid>
    );
};

export default WishList;