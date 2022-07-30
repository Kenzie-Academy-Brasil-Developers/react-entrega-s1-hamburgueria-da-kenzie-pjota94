import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 5rem;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 777px) {
    height: 8rem;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
