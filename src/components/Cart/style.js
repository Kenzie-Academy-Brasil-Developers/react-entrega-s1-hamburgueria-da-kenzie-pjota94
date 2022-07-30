import styled from "styled-components";

export const Container = styled.div`
  animation: myAnima 1s ease 0s 1 normal forwards;
  @keyframes myAnima {
    0% {
      transform: scaleY(0.4);
      transform-origin: 100% 0%;
    }

    100% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
    }
  }
`;

export const DivTop = styled.div`
  width: 22.812rem;
  height: 4.062rem;
  background-color: rgb(97, 176, 97);
  border-radius: 5px 5px 0px 0px;
  display: flex;
  align-items: center;

  p {
    color: rgba(255, 255, 255, 1);
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-left: 1.25rem;
  }

  @media screen and (max-width: 1122px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 407px) {
    width: 18.812rem;
  }
`;

export const DivCenter = styled.div`
  height: 21.25rem;
  width: 22.812rem;
  background-color: rgba(245, 245, 245, 1);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 7px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(97, 176, 97);
    border-radius: 7px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(97, 176, 97);
  }

  @media screen and (max-width: 407px) {
    width: 18.812rem;
  }
`;
