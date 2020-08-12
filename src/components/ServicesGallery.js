import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import ServicesList from './ServicesList';
import ServiceGaleryItem from './ServiceGaleryItem';
import backGround from '../assets/images/Star.svg';
import backGrounds from '../assets/images/neuro-image.png';

const Services = styled.section``;

const Wrapper = styled.div`
  padding-top: 46px;
`;

const SubTitle = styled.h3`
  margin-top: 11px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  color: #c4c4c4;
`;

const ServicesTitle = styled.h2`
  margin-top: 11px;
  font-size: 30px;
  line-height: 36px;
  text-align: center;

  color: #000000;
`;

const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 50px;
  height: 0px;
  left: 650px;
  top: 810px;

  border: 1px solid #2f80ed;
`;
const Star = styled.div`
  width: 26px;
  height: 26px;
  background: url(${backGround});
`;

const textContet = 'adasdasnj nadsjnj ndjsandjans lnadsjnds andjnas as';

const initialState = {
  neuro: {
    id: 1,
    title: 'неврологія',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    imgUrl: 'neuro-image.png',
  },
  massage: {
    id: 2,
    title: 'Масаж',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    imgUrl: 'image4.png',
  },
  bones: {
    id: 3,
    title: 'ревматологія',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    imgUrl: 'MaskGroup.jpg',
  },
};

const ServicesGallery = () => {
  const [currentService, setCurrentService] = useState(initialState.neuro);
  const handleGallerySwitch = (id) => {
    console.log(id);
    console.log(initialState[id]);
    setCurrentService(initialState[id]);
  };
  return (
    <Services>
      <Container>
        <Wrapper>
          <SubTitle>Комплексний підхід до Вашого здоров'я</SubTitle>
          <ServicesTitle>Ключові напрамки</ServicesTitle>
          <Separator>
            <Line />
            <Star />
            <Line />
          </Separator>
          <ServicesList switchFunction={handleGallerySwitch} />
        </Wrapper>
      </Container>
      <ServiceGaleryItem serviceContent={currentService} />
    </Services>
  );
};

export default ServicesGallery;
