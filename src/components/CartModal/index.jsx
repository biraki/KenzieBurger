import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss";

export const CartModal = ({
  cartList,
  setCartList,
  removeProduct,
  setVisible,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div role="dialog" className={styles.overlayBox}>
      <div className={styles.modal}>
        <div className={styles.block}>
          <h2 className="title2">Carrinho de compras</h2>
          <button
          className={styles.gray}
            aria-label="close"
            title="Fechar"
            onClick={() => setVisible(false)}
          >
            <MdClose size={21} />
          </button>
        </div>
        <div>
          <ul className={styles.box}>
            {cartList.map((product) => (
              <CartItemCard
                key={product.id}
                id={product.id}
                product={product}
                removeProduct={removeProduct}
              />
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.line}>
            <span className="text2">Total</span>
            <span className="price2">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button className={`btn full ${styles.modalbtn}`}onClick={() => setCartList([])}>
            Remover todos
          </button>
        </div>
      </div>
    </div>
  );
};
