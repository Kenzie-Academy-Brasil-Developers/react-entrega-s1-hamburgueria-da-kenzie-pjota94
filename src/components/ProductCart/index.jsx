import { Container } from "./style";

const ProductCart = ({ currentSale, setCurrentSale, elem }) => {
  const handdleDelete = (itemRemovido) => {
    const filterDelete = currentSale.filter((elem) => {
      return elem !== itemRemovido;
    });
    setCurrentSale(filterDelete);
  };

  return (
    <Container currentSale={currentSale} setCurrentSale={setCurrentSale}>
      <div className="div-image">
        <img src={elem.img} alt={elem.name} />
      </div>
      <div className="div-text">
        <p>{elem.name}</p>
        <span>{elem.category}</span>
      </div>
      <button onClick={() => handdleDelete(elem)}>Remover</button>
    </Container>
  );
};

export default ProductCart;
