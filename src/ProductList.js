import React from 'react';


const Product = props => {
    return(
        <li>
            <img src={props.imgSrc} alt={props.name} />
            <p>{props.name}</p>
            <p>${props.price}</p>
            <button onClick = {() => console.log("+")}>+</button>
            <button onClick = {() => console.log("-")}>-</button>
        </li>
    );
}
const ProductList = props => {
    const ProductItems = props.products.map((product, index) => <Product />);
    return (
        <ul>
            <li>{ProductItems}</li>
        </ul>
    );
}

export default ProductList;