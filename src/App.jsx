import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import CartEmpyt from "./components/CartEmpyt";
import { Header } from "./components/Header";
import Modal from "./components/Modal";
import ProductList from "./components/ProductList";
import api from "./services/api";
import GlobalStyles from "./styles/reset";

function App() {
  const [products, SetProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [clean, setClean] = useState([]);
  const [isDouble, setIsDouble] = useState(false);

  useEffect(() => {
    api.get().then((response) => SetProducts(response.data));
  }, []);

  const handleClick = (idClique) => {
    const produtoClicado = products.find((elem) => {
      return elem.id === idClique;
    });

    if (currentSale.includes(produtoClicado)) {
      setIsDouble(true);
    } else {
      setCurrentSale([...currentSale, produtoClicado]);
    }
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Header
        filteredProducts={filteredProducts}
        SetProducts={SetProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="container-controll">
        <section className="section">
          <ProductList products={products} handleClick={handleClick} />
        </section>
        {currentSale.length > 0 ? (
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            clean={clean}
          />
        ) : (
          <CartEmpyt />
        )}
      </div>
      {isDouble && <Modal isDouble={isDouble} setIsDouble={setIsDouble} />}
    </div>
  );
}

export default App;
