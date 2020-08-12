import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1172px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
