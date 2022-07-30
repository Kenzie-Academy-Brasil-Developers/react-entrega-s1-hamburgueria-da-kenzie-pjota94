import CardTotal from "../CartTotal";
import ProductCart from "../ProductCart";
import { Container, DivCenter, DivTop } from "./style";

const Cart = ({ currentSale, setCurrentSale, clean }) => {
  return (
    <Container>
      <DivTop>
        <p>Carrinho de compras</p>
      </DivTop>
      <DivCenter>
        {currentSale.map((elem) => (
          <ProductCart
            key={elem.id}
            elem={elem}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        ))}
      </DivCenter>
      <CardTotal
        currentSale={currentSale}
        clean={clean}
        setCurrentSale={setCurrentSale}
      />
    </Container>
  );
};

export default Cart;
