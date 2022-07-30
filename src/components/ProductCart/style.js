import styled from "styled-components";

export const Container = styled.div`
  width: 21.437rem;
  height: 5.062rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 10px;
  padding-top: 20px;
  margin-bottom: 1.437rem;
  animation: myAnim 1s ease 0s 1 normal forwards;

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(-250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .div-image {
    width: 5rem;
    height: 5rem;
    background-color: rgb(224, 224, 224);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 4.375rem;
    height: 4.375rem;
  }

  .div-text {
    margin-left: -4.375rem;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    margin-top: 5px;
    margin-bottom: 10px;
    overflow: hidden !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 102px;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(130, 130, 130);
  }

  button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: rgb(189, 189, 189);
    background-color: transparent;
    border: none;
  }

  button:hover {
    color: rgba(51, 51, 51, 1);
  }

  @media screen and (max-width: 407px) {
    width: 17.437rem;

    .div-text {
      margin-left: -0.375rem;
    }
  }
`;
