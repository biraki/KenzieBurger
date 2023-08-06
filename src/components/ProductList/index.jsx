import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss"

export const ProductList = ({ products, addCart }) => {
  return (
    <div>
      {products.length > 0 ? (
        <ul className={styles.container}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addCart={addCart} />
          ))}
        </ul>
      ) : (
        <p className="title1">Nenhum produto encontrado</p>
      )}
    </div>
  );
};
