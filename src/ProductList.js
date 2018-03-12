import React from 'react';
import Product from './Product';

const ProductList = props => {
    const ProductItems = Object.keys(props.products).map(id => {
        return (
            <Products {...props.products[id]} id={id}/>
        );
    });
    const products = Object.keys(props.products).map(key => props.products[key]);
    const ProductItems = products.map((product, index) => (
     <Product {...product} key={id} position={index}/>))
    return (
        <ul>
            <li>{ProductItems}</li>
        </ul>
    );
}

export default ProductList;