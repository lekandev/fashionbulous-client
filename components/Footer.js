import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={footer__nav}>
                <ul className={footer__pages}>
                    <li className={footer__pages-links}>Home</li>
                    <li className={footer__pages-links}>Featured</li>
                    <li className={footer__pages-links}>Latest</li>
                    <li className={footer__pages-links}>Shop</li>
                </ul>
                <ul className={footer__socials}>
                    <li className={styles.footer__socials-links}>Instagram</li>
                    <li className={styles.footer__socials-links}>Twitter</li>
                    <li className={styles.footer__socials-links}>Facebook</li>
                    <li className={styles.footer__socials-links}>LinkedIn</li>
                </ul>
                <ul className={footer__contact}>
                    <li className={styles.footer__contact-links}>08050510619</li>
                    <li className={styles.footer__contact-links}>fashionbulous@gmail.com</li>
                    <li className={styles.footer__contact-links}>09022754920</li>
                    <li className={styles.footer__contact-links}>face A, madho road, suya avenue</li>
                </ul>
            </div>
            <div className={footer__copyright}>
                <p className={footer__copyright-info}>
                    Copyright &copy; 2021 Fashionbulous, All rights reserved, developed y <a href='https://lekan.vercel.app'>lekandev</a>
                </p>
            </div>
        </div>
    )
}

export default Footer
