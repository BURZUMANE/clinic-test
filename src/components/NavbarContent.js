import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 103px;
  padding: 0;
  justify-content: space-between;
  width: 450px;
`;

const MenuItem = styled.a`
  font-family: 'Lato';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-transform: uppercase;
  color: #2f80ed;
  text-decoration: none;
`;

const Li = styled.li``;
const NavbarContent = () => {
  return (
    <Wrapper>
      <List>
        <Li>
          <MenuItem href="#"> Переваги</MenuItem>
        </Li>
        <Li>
          <MenuItem href="#">лікування</MenuItem>
        </Li>
        <Li>
          <MenuItem href="#">ціни</MenuItem>
        </Li>
        <Li>
          <MenuItem href="#">Контакти</MenuItem>
        </Li>
      </List>
      <Button title={'Записатись на прийом'} />
    </Wrapper>
  );
};

export default NavbarContent;
