import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import colors from '../helpers/colors';

const Contacts = styled.section`
  width: 1440px;
  height: 72px;
  background: #2f80ed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${colors.white};
`;

const ContactItemList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  .middle {
    border-right: 2px solid ${colors.white};
    border-left: 2px solid ${colors.white};
    padding: 0 129px;
  }
`;
const Link = styled.a`
  color: ${colors.white};
`;
const Li = styled.li``;

const phoneList = styled.ul``;

const ContactBar = () => {
  return (
    <Contacts>
      <Container>
        <ContactItemList>
          <Li>м. Київ, вул. Еленівська, 8</Li>
          <Li className={'middle'}>
            <phoneList>
              <Li>
                <Link href="callto:0632222222">(063) 222 22 22</Link>
              </Li>
              <Li>
                <Link href="callto:0632222222">(063) 222 22 22</Link>
              </Li>
              <Li>
                <Link href="callto:0632222222">(063) 222 22 22</Link>
              </Li>
            </phoneList>
          </Li>
          <Li>
            <Link href="mailto:info@clinic.com">info@clinic.com</Link>
          </Li>
        </ContactItemList>
      </Container>
    </Contacts>
  );
};

export default ContactBar;
