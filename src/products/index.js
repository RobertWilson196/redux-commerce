

const initialState = [

    {
        imgSrc: 'http://via.placeholder.com/100x100',
        name: "Javelin",
        price: 500.00,
        count: 0
    },
    {
        imgSrc: 'http://via.placeholder.com/100x100',
        name: "Snail",
        price: 3.99,
        count: 0
    },
    {
        imgSrc: 'http://via.placeholder.com/100x100',
        name: "Rug",
        price: 93.47,
        count: 0
    }

];

const reducer = (state=initialState, action) => {
    console.log('products');
    return state;
}

export default reducer;