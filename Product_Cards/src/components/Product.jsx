function Product({name,price,category,rating}){
    return(
        <div>
            <h1>Products Listing</h1>
            <div>
                <h2>Product's Name: {name}</h2>
                <h2>Price: {price}</h2>
                <h2>Category: {category}</h2>
                <h2>Rating: {rating}</h2>
            </div>
        </div>
    )
}

export default Product;