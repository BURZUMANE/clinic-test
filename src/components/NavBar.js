import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Logo from './Logo';
import NavbarContent from './NavbarContent';

const Nav = styled.div`
  padding-top: 5px;
  position: absolute;
  width: 1440px;
  height: 72px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => {
  return (
    <Nav>
      <Container>
        <NavWrapper>
          <Logo />
          <NavbarContent />
        </NavWrapper>
      </Container>
    </Nav>
  );
};

export default NavBar;
