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
                        height: 500px;
                    }

                    .featuredProducts__container {
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}
        </style>
      </div>
    );
}

export default FeaturedProducts
