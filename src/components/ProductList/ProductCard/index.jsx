import styles from"./styles.module.scss"

export const ProductCard = ({ product, addCart }) => {
  return (
    <li className={styles.card}>
      <img src={product.img} alt={product.name} />
      <div>
        <h3 className="title1">{product.name}</h3>
        <span className="text2">{product.category}</span>
        <span className="price1">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className="btn sm" onClick={() => addCart(product)}>Adicionar</button>
      </div>
    </li>
  );
};
