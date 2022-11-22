import styled from 'styled-components';
import { Card, Container } from 'react-bootstrap';

export const WelcomeContainer = styled(Container)`
  height: 100vh;

  .row {
    height: 100%;
    justify-content: center;

    [class^="col-"] {
      align-self: center;
    }
  }
`;

export const Main = styled(Container)`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  
  & a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

