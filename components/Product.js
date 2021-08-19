import Image from 'next/image';
import styles from './Product.module.scss'

const Product = ({ productName, productImg, productPrice, isRect, product__desc }) => {
  const rectClassName = styles.rectProduct

    return (
      <div className={isRect ? reactClassName : styles.Product}>
        <Image width={250} height={300} object-fit='contain' src={productImg} alt={productName} className="product__image" />
        <h3 className="product__name">{productName}</h3>
        { isRect ? <p className="product__desc">{product__desc}</p> : null }
        <small className="product__price">{productPrice}</small>
      </div>
    );
}

export default Product
