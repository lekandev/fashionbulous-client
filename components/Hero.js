import Link from 'next/link'

import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__info}>
                <h1 className={styles.hero__title}>Fashionbulous</h1>
                <p className={styles.hero__tagline}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus.</p>
                <Link className={styles.hero__button} href='/shop'>Shop</Link>
            </div>
            
        </div>
    )
}

export default Hero
