import ProductCard from './ProductCard'

const FeaturedProducts = () => {
    return (
        <div className="featuredProducts">
            <div className="featuredProducts__container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <style jsx>
                {`
                    .featuredProducts {
                        width: 100%;
                        height: 400px;
                        display: grid;
                        place-content: center;
                    }

                    .featuredProducts__container {
                        display: flex;
                    }
                `}
            </style>
        </div>
    )
}

export default FeaturedProducts
