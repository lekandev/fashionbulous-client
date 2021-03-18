const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1 className="banner__title">
                    Fashionbulous
                </h1>
                <p className="banner__tagline">Creativity and Fashion Design at its best</p>
            </div>

            <style jsx>
                {`
                    .banner {
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #e1e1e1;
                        border-bottom-right-radius: 40px;
                        border-bottom-left-radius: 40px;
                    }

                    .banner__content {
                        text-align: center;
                        background-color: #fff;
                        border-radius: 10px;
                        padding: 30px;
                    }

                    h1 {
                        font-size: 4rem;
                        letter-spacing: .5rem;
                    }

                    p {
                        font-size: 1.5rem;
                    }
                `}
            </style>
        </div>
    )
}

export default Banner
