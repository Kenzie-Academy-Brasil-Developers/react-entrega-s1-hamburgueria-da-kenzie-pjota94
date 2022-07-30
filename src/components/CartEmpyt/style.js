import styled from "styled-components";

export const Container = styled.div`
  animation: myAnimEmpty 1s ease 0s 1 normal forwards;
  @keyframes myAnimEmpty {
    0% {
      transform: scaleY(0.4);
      transform-origin: 0% 100%;
    }

    100% {
      transform: scaleY(1);
      transform-origin: 0% 100%;
    }
  }

  .top {
    width: 22.812rem;
    height: 4.062rem;
    background-color: rgb(97, 176, 97);
    border-radius: 5px 5px 0px 0px;
    display: flex;
    align-items: center;
  }

  .top > p {
    color: rgba(255, 255, 255, 1);
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-left: 1.25rem;
  }

  .empyt {
    height: 9.875rem;
    width: 22.812rem;
    background-color: rgb(245, 245, 245);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .empyt > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
  }

  .empyt > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgb(130, 130, 130);
  }

  @media screen and (max-width: 1122px) {
    .top {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 407px) {
    .top {
      width: 18.812rem;
    }

    .empyt {
      width: 18.812rem;
    }
  }
`;
