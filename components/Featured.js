import styles from './Featured.module.scss'
import Product from './Product'

const Featured = () => {
    return (
        <div className={styles.featured}>
            <h2 className={styles.featured__title}>Featured Products</h2>
            <div className={styles.featured__container}>
                <Product productName='Fela Jump Suit' productImg='/../public/assets/images.jpg' productPrice='$490' isRect={false} />
                <Product productName='Fela Gown' productImg='/../public/assets/images.jpg' productPrice='$490' isRect={false} />
                <Product productName='Fela Tees' productImg='/../public/assets/images.jpg' productPrice='$490' isRect={false} />
            </div>
        </div>
    )
}

export default Featured
