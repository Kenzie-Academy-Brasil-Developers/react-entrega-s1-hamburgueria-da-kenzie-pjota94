import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./style";

export const InputSearch = ({
  filteredProducts,
  SetProducts,
  setFilteredProducts,
}) => {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    api.get().then((response) => setFilteredProducts(response.data));
  }, [setFilteredProducts]);

  const handdleFilter = (event) => {
    event.preventDefault();
    const filtro = filteredProducts.filter(({ name, category }) => {
      let inputLower = userInput.toLowerCase();
      let nameLower = name.toLowerCase();
      let categoryLower = category.toLowerCase();

      return (
        nameLower.includes(inputLower) || categoryLower.includes(inputLower)
      );
    });
    SetProducts(filtro);
  };

  return (
    <Container
      filteredProducts={filteredProducts}
      SetProducts={SetProducts}
      setFilteredProducts={setFilteredProducts}
    >
      <form onSubmit={handdleFilter} action="">
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button>Pesquisar</button>
      </form>
    </Container>
  );
};
