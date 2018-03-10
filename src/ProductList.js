import React from 'react';
import Product from './Product';

const ProductList = props => {
    const products = Object.keys(props.products).map(key => props.products[key]);
    const ProductItems = products.map((product, index) => (
     <Product {...product} key={index} position={index}/>))
    return (
        <ul>
            <li>{ProductItems}</li>
        </ul>
    );
}

export default ProductList;