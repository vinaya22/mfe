import React, {Suspense} from "react";
import {ProductsShell} from 'common/src/index';
import WishList from './wishList';
import useStore from 'store/src/index';
const Products = React.lazy(() => import('products/ProductList'));

const navLinks = [
    {path: '/', name:'Products'},
    {path: '/wishlist', name: 'Wish List'},    
];

export const App = () => {
    const {wishList, add} = useStore();    
    console.log('count', wishList.length);

    const routes = [
        {
            path: '/',
            element: <Suspense><Products add={add}/></Suspense>
        },
        {
            path: '/wishlist',
            element: <WishList products={wishList}/>
        }
    ];
    

    return (
        <ProductsShell 
            title={'Wish List'} 
            routes={routes} 
            navLinks={navLinks}
            count={wishList.length}
        />
    );
}