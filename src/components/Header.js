import React from 'react';
import styled from 'styled-components';
import HeaderContent from './HeaderContent';
import backGround from '../assets/images/header.png';
import Container from './Container';
const Wrapper = styled.div`
  height: 602px;
  background-position: left;
  background-position: center;
  background: linear-gradient(
      87.68deg,
      rgba(255, 255, 255, 0) 7.73%,
      rgba(255, 255, 255, 0.9) 55.76%
    ),
    url(${backGround});
  padding-top: 134px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderContent />
      </Container>
    </Wrapper>
  );
};

export default Header;
