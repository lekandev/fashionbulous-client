const ProductCard = ({ productImage, productName, price, category }) => {
    return (
        <div className="productCard">
            <img className="product__img" src={ productImage } alt={ productName }/>
            <h3 className="product__name">{ productName }</h3>
            <p className="product__category">{ category }</p>
            <small className="product__price">{ price }</small>
            <button className="product__order">Order Now</button>
        </div>
    )
}

export default ProductCard
