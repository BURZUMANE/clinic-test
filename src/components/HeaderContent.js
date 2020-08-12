import React from 'react';
import styled from 'styled-components';
import Button from './Button';
const Div = styled.div`
  width: 429px;
  margin: 0 auto;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  text-transform: uppercase;

  color: #2f80ed;
`;

const HeaderHeading = styled.h1`
  font-family: PF-Din-Text-Cond-Pro;
  font-size: 50px;
  line-height: 55px;
  /* or 110% */

  text-align: right;

  color: #000000;
`;

const HeaderContent = () => {
  return (
    <Div>
      <Subtitle>ПОВНИЙ КОМПЛЕКС МЕДИЧНИХ ПОСЛУГ</Subtitle>
      <HeaderHeading>Європейські стандарти медичної допомоги</HeaderHeading>
      <Button title={'про клініку'} variant={true} />
    </Div>
  );
};

export default HeaderContent;
