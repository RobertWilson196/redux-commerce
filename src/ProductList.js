import React from 'react';
import Product from './Product';

const ProductList = props => {
    const ProductItems = props.products.map((product, index) => (
     <Product {...product} key={index} position={index}/>))
    return (
        <ul>
            <li>{ProductItems}</li>
        </ul>
    );
}

export default ProductList;