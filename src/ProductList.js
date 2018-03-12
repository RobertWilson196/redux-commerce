import React from 'react';
import Product from './Product';

const ProductList = props => {
    const ProductItems = Object.keys(props.products).map(id => {
        const lowerName = props.products[id].name.toLowerCase();
        const lowerSearchTerm = props.searchTerm.toLowerCase();
        if(lowerName.includes(lowerSearchTerm)){
            return (
                <Product {...props.products[id]} id={id}/>
            );
        } else { return null; }
    });

    return (
        <ul>
            <li>{ProductItems}</li>
        </ul>
    );
}

export default ProductList;