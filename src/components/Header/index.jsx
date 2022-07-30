import { InputSearch } from "../InputSearch";
import { Logo } from "../Logo";
import { HeaderStyle } from "./style";

export const Header = ({
  filteredProducts,
  SetProducts,
  setFilteredProducts,
}) => {
  return (
    <HeaderStyle>
      <Logo></Logo>
      <InputSearch
        filteredProducts={filteredProducts}
        SetProducts={SetProducts}
        setFilteredProducts={setFilteredProducts}
      ></InputSearch>
    </HeaderStyle>
  );
};
