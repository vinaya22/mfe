import React, {Suspense} from 'react';
import {ProductsShell} from 'common/src/index';
import ProductList from './productList';

const WishList = React.lazy(() => import('wishlist/WishList'));

const routes = [
    {
        path: '/',
        element: <ProductList/>
    },
    {
        path: '/wishlist',
        element: <Suspense><WishList/></Suspense>
    }
];

const navLinks = [        
    {path: '/', name: 'Products'},
    {path: '/wishlist', name:'Wish List'},
];

export const App = () => {         
    return (
        <>
            <ProductsShell title={'Products Demo'} routes={routes} navLinks={navLinks}></ProductsShell>
        </>
    );
};