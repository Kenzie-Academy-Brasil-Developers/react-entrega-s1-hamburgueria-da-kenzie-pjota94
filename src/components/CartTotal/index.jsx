import { Container } from "./style";

const CardTotal = ({ currentSale, setCurrentSale, clean }) => {
  const handdleDelAll = () => {
    setCurrentSale(clean);
  };

  const somaTotal = currentSale.reduce((acc, value) => {
    return acc + value.price;
  }, 0);

  return (
    <Container>
      <div>
        <p>Total</p>
        <span>R$ {somaTotal.toFixed(2)}</span>
      </div>
      <button onClick={handdleDelAll}>Remover todos </button>
    </Container>
  );
};

export default CardTotal;
