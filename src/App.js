import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  background-color: #202c37;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    font-size: 32px;
    font-family: 'roboto';
  }
`;

const App = () => (
  <Wrapper>
    <h1>Netinho Basic React App </h1>
  </Wrapper>
);
export default App;
