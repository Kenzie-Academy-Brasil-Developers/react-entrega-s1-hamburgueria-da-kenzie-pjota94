import styled from "styled-components";

export const Container = styled.div`
  margin-right: 7.187rem;

  input {
    width: 22.812rem;
    height: 3.75rem;
    border-radius: 8px;
    padding-left: 20px;
  }

  input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: rgb(224, 224, 224);
  }

  button {
    background-color: rgba(39, 174, 96, 1);
    border-radius: 8px;
    width: 6.687rem;
    height: 2.5rem;
    color: rgba(255, 255, 255, 1);
    z-index: 1;
    position: relative;
    margin-left: -7.562rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    border: none;
  }

  button:hover {
    background-color: rgba(147, 215, 175, 1);
  }

  @media screen and (max-width: 777px) {
    margin-right: 0;
  }

  @media screen and (max-width: 407px) {
    input {
      width: 18.812rem;
    }
  }
`;
