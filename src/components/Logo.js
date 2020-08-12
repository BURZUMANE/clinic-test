import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const LogoItem = styled.img`
  width: 250px;
  height: 58px;
`;

const Logo = () => {
  return (
    <a href="#">
      <LogoItem src={logo} />
    </a>
  );
};

export default Logo;
