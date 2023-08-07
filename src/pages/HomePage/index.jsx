import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal/index.jsx";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api.js";

export const HomePage = () => {
  const localCartList = localStorage.getItem("@CartList");
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(
    localCartList ? JSON.parse(localCartList) : []
  );
  const [search, setSearch] = useState([]);
  const [isVisible, setVisible] = useState(false);

  const addToCart = (selectedProduct) => {
    if (!cartList.some((selected) => selected.id === selectedProduct.id)) {
      setCartList([...cartList, selectedProduct]);
      toast.success("Produto adicionado com sucesso.", {
        autoClose: 2000,
        position: "bottom-right",
      });
    } else {
      toast.error("O produto já esta no carrinho.", {
        autoClose: 2000,
        position: "bottom-right",
      });
    }
  };

  const removeProduct = (removeId) => {
    const newCartList = cartList.filter((item) => item.id !== removeId);
    setCartList(newCartList);
  };

  useEffect(() => {
    localStorage.setItem("@CartList", JSON.stringify(cartList));
  }, [cartList]);

  const searchResult = productList.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toString().toLocaleLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(search.toString().toLocaleLowerCase())
  );

  const products = search ? searchResult : productList;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const {data} = await api.get("products");
        setProductList(data);
      } catch (error) {
        toast(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <Header
        setSearch={setSearch}
        cartList={cartList}
        setVisible={setVisible}
      />
      <main className="container">
        <ProductList products={products} addCart={addToCart} />
        {isVisible ? (
          <CartModal
            cartList={cartList}
            setCartList={setCartList}
            removeProduct={removeProduct}
            setVisible={setVisible}
          />
        ) : (null)}
      </main>
      <ToastContainer />
    </>
  );
};
