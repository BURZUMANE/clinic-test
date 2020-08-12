import React from 'react';
import styled from 'styled-components';
import colors from '../helpers/colors';
import head from '../assets/images/head.png';
import massage from '../assets/images/massage.png';
import bones from '../assets/images/bones.png';

const Wrapper = styled.div``;

const ServiceList = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
`;
const Li = styled.li`
  text-align: center;
  color: ${colors.black};
  P {
    margin-top: 39px;
  }
  cursor: pointer;
`;

const ServicesList = ({ switchFunction }) => {
  return (
    <Wrapper>
      <ServiceList>
        <Li
          onClick={() => {
            switchFunction('neuro');
          }}
        >
          <img src={head} />
          <p>Неврологія</p>
        </Li>
        <Li
          name="massage"
          onClick={() => {
            switchFunction('massage');
          }}
        >
          <img src={massage} />
          <p>Масаж</p>
        </Li>
        <Li
          name="bones"
          onClick={() => {
            switchFunction('bones');
          }}
        >
          <img src={bones} />
          <p>Ревматологія</p>
        </Li>
      </ServiceList>
    </Wrapper>
  );
};

export default ServicesList;
