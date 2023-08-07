import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setSearch, cartList, setVisible }) => {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };

  return (
    <header className={styles.bg}>
      <div className={`container ${styles.flex}`}>
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <div className={styles.full}>
          <div className={styles.absolute}>
            <button className={styles.cart} onClick={() => setVisible(true)}>
              <MdShoppingCart size={30} />
              <div className={styles.square}>
                <span className={styles.span}>{cartList.length}</span>
              </div>
            </button>
          </div>
          <form onSubmit={submit} className={styles.form}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={styles.input}
              placeholder="Digite sua pesquisa"
            />
            <button type="submit" className={styles.btn}>
              <MdSearch size={21} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
