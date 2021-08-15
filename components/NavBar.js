import Link from 'next/link';

import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.navbar__logo}>FELA</h1>

            <ul className={styles.navbar__list}>
                <li className={styles.navbar__listItems}><Link href="/">Home</Link></li>
                <li className={styles.navbar__listItems}><Link href="#">Featured</Link></li>
                <li className={styles.navbar__listItems}><Link href="#">Latest</Link></li>
                <li className={styles.navbar__listItems}><Link href="/shop">Shop</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
