import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const ButtonContent = styled.div`
  width: 210px;
  height: 32px;
  border: 1px solid #2f80ed;
  box-sizing: border-box;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.main};
  border: 2px solid #2f80ed;
  background-color: ${(props) => props.theme.accent};
`;

ButtonContent.defaultProps = {};

const accent = {
  main: '#FFFFFF',
  accent: '#2F80ED',
};

const primary = {
  main: '#2F80ED',
  accent: 'transparent',
};

const Span = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

const Button = ({ title, variant = false }) => {
  let buttonTheme = primary;
  if (variant) {
    buttonTheme = accent;
  }
  return (
    <ThemeProvider theme={buttonTheme}>
      <ButtonContent>
        <Span>{title}</Span>
      </ButtonContent>
    </ThemeProvider>
  );
};

export default Button;
