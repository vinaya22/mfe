import React from "react";
import { SimpleGrid } from '@mantine/core';
import {ProductCard} from 'common/src/index';

const WishList = (props) => {
    const {products} = props;    

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
                            path={product.path}
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