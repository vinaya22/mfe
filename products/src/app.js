import React, {Suspense} from 'react';
import {ProductsShell} from 'common/src/index';
import ProductList from './productList';
import useStore from 'store/src/index';

const WishList = React.lazy(() => import('wishlist/WishList'));

const navLinks = [        
    {path: '/', name: 'Products'},
    {path: '/wishlist', name:'Wish List'},
];

export const App = () => {          
    const {wishList, add} = useStore();    
    
    const routes = [
        {
            path: '/',
            element: <ProductList add={add}/>
        },
        {
            path: '/wishlist',
            element: <Suspense><WishList products={wishList}/></Suspense>
        }
    ];
    
    return (
        <>
            <ProductsShell 
                title={'Products Demo'} 
                routes={routes} 
                navLinks={navLinks}
                count={wishList.length}
            />
        </>
    );
};