import React from 'react';
import styled from 'styled-components';
import './App.css';
import Card from './components/card';
import Header from './components/header';





function App() {
  return (
    <>
      <Header/>
    <Container>
      <Card/>
    </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  /* width: 100%;
  height: 100vh;
  */
  flex-direction: row; 
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  height: 64rem;
  align-items: center;
  justify-content: center;
  padding: 0 0 6.125rem;
  background-color: #fcfcfc;

  /* background-color: red; */
`;