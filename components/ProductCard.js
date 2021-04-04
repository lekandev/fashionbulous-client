const ProductCard = ({ productImage, productName, price, category }) => {
    return (
        <div className="productCard">
            <img className="product__img" src={ productImage } alt={ productName }/>
            <div className="product__info">
                <h3 className="product__name">{ productName || "Fela Shorts" }</h3>
                <p className="product__category">Category: { category || "Women" }</p>
                <small className="product__price">{ price || "$420" }</small>
                <button className="product__order">Order Now</button>
            </div>
            <style jsx>{`
                .productCard {
                    width: 225px;
                    height: 300px;
                    border: 1px solid #707070;
                    border-radius: 10px;
                    margin: 50px;
                    overflow: hidden;
                }
                
                img {
                    border-bottom: 1px solid #707070;
                    border-radius: 10px;
                    width: 100%;
                    height: 180px;
                }

                .product__info {
                    margin: 10px 15px 0 15px;
                }
            `}</style>
        </div>
    )
}

export default ProductCard
