import styled from "styled-components";

export const Container = styled.div`
  width: 14.75rem;
  height: 21.625rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  margin-right: 20px;

  @media screen and (max-width: 1122px) {
    width: 15rem;
    min-width: 15rem;
  }

  @media screen and (max-width: 1400px) {
    margin-bottom: 20px;
  }
`;

export const DivImagem = styled.div`
  background-color: rgb(245, 245, 245);
  margin-bottom: 1.666rem;
  height: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 177px;
    height: 165px;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .name-product {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-left: 1.312rem;
    margin-bottom: 0.875rem;
  }

  .type-product {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(130, 130, 130);
    margin-left: 1.312rem;
    margin-bottom: 0.875rem;
  }

  .price-product {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: rgb(97, 176, 97);
    margin-left: 1.312rem;
    margin-bottom: 0.875rem;
  }

  button {
    width: 6.625rem;
    height: 2.5rem;
    background-color: rgb(97, 176, 97);
    border-radius: 8px;
    color: rgba(255, 255, 255, 1);
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.062rem;
    border: none;
    margin-left: 1.312rem;
  }

  button:hover {
    background-color: rgba(147, 215, 175, 1);
  }
`;
