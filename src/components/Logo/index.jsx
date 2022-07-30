import logoBurguer from "../../assets/logo.svg";
import { Container } from "./style";

export const Logo = () => {
  return (
    <Container>
      <img src={logoBurguer} alt="" />
    </Container>
  );
};
