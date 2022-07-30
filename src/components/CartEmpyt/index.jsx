import { Container } from "./style";

const CartEmpyt = () => {
  return (
    <Container>
      <div className="top">
        <p>Carrinho de compras</p>
      </div>
      <div className="empyt">
        <p>Sua sacola está vazia</p>
        <span>Adicione itens</span>
      </div>
    </Container>
  );
};

export default CartEmpyt;
