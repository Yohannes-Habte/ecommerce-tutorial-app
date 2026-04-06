import { products } from "../../data/products";
import { card, typography } from "../../styles/uiConfig";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="px-3">
      <h2 className={typography.subtitle}>Product List</h2>

      <div className={card.cardsWrapper}>
        {products.length === 0 ? (
          <p className={typography.paragraph}>No products available.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
};

export default ProductList;
