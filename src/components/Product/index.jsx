import { Container, DivImagem, DivText } from "./style";

const Product = ({
  name,
  category,
  image,
  price,
  id,
  products,
  handleClick,
}) => {
  return (
    <Container>
      <DivImagem>
        <img src={image} alt="" />
      </DivImagem>
      <DivText>
        <p className="name-product">{name}</p>
        <p className="type-product">{category}</p>
        <p className="price-product">R$ {price}</p>
        <button onClick={() => handleClick(id)}>Adicionar</button>
      </DivText>
    </Container>
  );
};

export default Product;
