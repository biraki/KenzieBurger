import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss"

export const CartItemCard = ({ product, removeProduct, id }) => {
  return (
    <li className={styles.box}>
      <div className={styles.line}>
        <img src={product.img} alt={product.name} className={styles.gray}/>
        <h3>{product.name}</h3>
      </div>
      <button
        aria-label="delete"
        title="Remover item"
        onClick={() => removeProduct(id)}
        className={styles.icon}
      >
        <MdDelete size={25} />
      </button>
    </li>
  );
};
