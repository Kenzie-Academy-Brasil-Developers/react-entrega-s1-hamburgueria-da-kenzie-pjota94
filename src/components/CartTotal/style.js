import styled from "styled-components";

export const Container = styled.div`
  height: 8.75rem;
  background-color: rgba(245, 245, 245, 1);
  border-top: solid 1px rgb(224, 224, 224);
  text-align: center;

  div {
    margin-top: 14px;
    margin-bottom: 22px;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-left: 0.625rem;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: rgb(130, 130, 130);
    margin-right: 0.625rem;
  }

  button {
    width: 21.437rem;
    height: 3.75rem;
    background-color: rgba(224, 224, 224, 1);
    border-radius: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: rgb(130, 130, 130);
    border: none;
  }

  button:hover {
    background-color: rgb(130, 130, 130);
    color: rgb(237, 232, 232);
  }

  @media screen and (max-width: 407px) {
    button {
      width: 18.437rem;
    }
  }
`;
