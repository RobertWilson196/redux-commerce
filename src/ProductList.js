import React from 'react';
import Product from './Product';
z
const ProductList = props => {
    const ProductItems = props.products.map((product, index) =>
     <Product {...product} key={index} />);
    return (
        <ul>
            <li>{ProductItems}</li>
        </ul>
    );
}

export default ProductList;