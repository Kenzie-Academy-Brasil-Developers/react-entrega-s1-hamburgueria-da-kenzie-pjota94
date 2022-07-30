import styled from "styled-components";

export const Container = styled.div`
  width: 50.75rem;
  height: 45.937rem;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1400px) {
    width: 35.75rem;
  }

  @media screen and (max-width: 1122px) {
    flex-wrap: nowrap;
    height: 22.937rem;
  }

  @media screen and (max-width: 744px) {
    width: 31.75rem;
  }

  @media screen and (max-width: 552px) {
    width: 20.75rem;
  }

  @media screen and (max-width: 407px) {
    width: 15.75rem;
  }
`;
