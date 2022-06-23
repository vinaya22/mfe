import React, {Suspense} from "react";
import {ProductsShell} from 'common/src/index';
import WishList from './wishList';

const Products = React.lazy(() => import('products/ProductList'));
const routes = [
    {
        path: '/',
        element: <WishList/>
    },
    {
        path: '/products',
        element: <Suspense><Products/></Suspense>
    }
];

const navLinks = [
    {path: '/products', name:'Products'},
    {path: '/', name: 'Wish List'},    
];

export const App = () => {
    return (
        <>
            <ProductsShell title={'Wish List'} routes={routes} navLinks={navLinks}></ProductsShell>
        </>
    );
}