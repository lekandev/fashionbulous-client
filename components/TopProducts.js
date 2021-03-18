import ProductCard from './ProductCard'

const TopProducts = () => {
    return (
      <div className="topProducts">
        <div className="topProducts__container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    );
}

export default TopProducts
