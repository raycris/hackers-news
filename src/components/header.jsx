import React from "react";
import styled from "styled-components";

import TitleSVG from "../assets/icon/hacker-news.svg"

const Header = () => {
  return (
    <Container>
      <TitleImage src={TitleSVG}/>
    </Container>
  )
};

export default Header;

const Container = styled.div`
  height: 7.125rem;
  margin: 0 0 4.375rem;
  padding: 2.75rem 67.625rem 2.625rem 9.375rem;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
`;

const TitleImage = styled.img`
width: 13rem;
  height: 1.75rem;
  object-fit: contain;
  font-family: Baskerville;
  font-size: 1.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #3b3b3b;
`
