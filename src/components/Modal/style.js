import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background-color: rgba(89, 86, 86, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-box {
    background-color: white;
    width: 25rem;
    height: 11.562rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: myAnimq 1.1s ease 0s 1 normal forwards;
  }

  @keyframes myAnimq {
    0% {
      animation-timing-function: ease-in;
      opacity: 0;
      transform: translateY(-250px);
    }

    38% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: translateY(0);
    }

    55% {
      animation-timing-function: ease-in;
      transform: translateY(-65px);
    }

    72% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }

    81% {
      animation-timing-function: ease-in;
      transform: translateY(-28px);
    }

    90% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }

    95% {
      animation-timing-function: ease-in;
      transform: translateY(-8px);
    }

    100% {
      animation-timing-function: ease-out;
      transform: translateY(0);
    }
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: rgb(130, 130, 130);
    position: relative;
    top: -3.937rem;
    left: 20.562rem;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    margin-right: 2rem;
  }

  @media screen and (max-width: 453px) {
    .modal-box {
      width: 18rem;
    }

    button {
      top: -3.937rem;
      left: 14.562rem;
    }
  }
`;
