import Product from "../Product";
import { Container } from "./style";

const ProductList = ({ products, handleClick }) => {
  return (
    <Container>
      {products.map((elem, index) => (
        <Product
          key={index}
          name={elem.name}
          category={elem.category}
          image={elem.img}
          price={elem.price}
          id={elem.id}
          products={products}
          handleClick={handleClick}
        ></Product>
      ))}
    </Container>
  );
};

export default ProductList;
