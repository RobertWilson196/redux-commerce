import React from 'react';
import Product from './Product';

const ProductList = props => {
    const ProductItems = Object.keys(props.products).map(id => {
        return (
            <Product {...props.products[id]} id={id}/>
        );
    });
    return (
        <ul>
            <li>{ProductItems}</li>
        </ul>
    );
}

export default ProductList;