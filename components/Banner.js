const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1 className="banner__title">Fashionbulous</h1>
                <div className="banner__tagline">Creativity and Design at its best</div>
                <a href="#" className="banner__button">Shop Now</a>
            </div>
            <div className="banner__img"></div>

            <style jsx>
                {`
                    .banner {
                        height: 100vh;
                        display: flex;
                        background-color: #D1B000
                    }

                    .banner__content {
                        margin: 15em 15em
                    }

                    .banner__title {
                        font-size: 4rem;
                        margin-bottom: 20px
                    }

                    .banner__tagline {
                        font-size: 1.5rem;
                        margin-bottom: 40px
                    }

                    .banner__button {
                        padding: 15px;
                        background-color: #FFFDD0;
                    }
                `}
            </style>
        </div>
    )
}

export default Banner
