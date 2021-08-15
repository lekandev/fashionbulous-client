import Image from 'next/image';

const Product = ({ productName, productImg, productPrice, isRect, product__desc }) => {
    return (
      <div className="product">
        <Image src={productImg} alt={productName} className="product__image" />
        <h3 className="product__name">{productName}</h3>
        { isRect ? <p className="product__desc">{product__desc}</p> : null }
        <small className="product__price">{productPrice}</small>
      </div>
    );
}

export default Product
