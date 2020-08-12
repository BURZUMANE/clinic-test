import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Container from './Container';
import Button from './Button';
const ServiceSection = styled.div`
  width: 1440px;
  height: 572px;
  padding: 0;
  background: #f6f6f6;
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 37px;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  width: 417px;
  padding-top: 60px;
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    text-transform: uppercase;

    color: #000000;
  }
  p {
    font-family: HelveticaNeueCyr-Thin;
    margin: 34px 0;
  }
`;
const ImageContainer = styled.div`
  width: 417px;
  img {
    width: 475px;
    height: 488px;
  }
`;

const TriagnleContainer = styled.div`
  & {
    position: relative;
    padding: 1em;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.4);
  }
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    margin-left: -0.5em;
    bottom: -2em;
    left: ${(props) => {
      console.log(props.theme.position);
      return props.theme.position;
    }};

    box-sizing: border-box;

    border: 1em solid black;
    border-color: transparent transparent #fff #fff;

    transform-origin: 0 0;
    transform: rotate(-45deg);

    box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 0.4);
  }
`;

const ServiceGaleryItem = ({ serviceContent }) => {
  const { title, text, imgUrl, id } = serviceContent;
  console.log(id);

  TriagnleContainer.defaultProps = {};

  const first = {
    position: '25%',
  };

  const second = {
    position: '50%',
  };
  const third = {
    position: '75%',
  };
  let galleryStage;
  if (id === 1) {
    galleryStage = first;
  } else if (id === 2) {
    galleryStage = second;
  } else {
    galleryStage = third;
  }
  console.log(galleryStage);
  return (
    <ServiceSection>
      <ThemeProvider theme={galleryStage}>
        <TriagnleContainer />
      </ThemeProvider>
      <Container>
        <Wrapper>
          <TextContainer>
            <h3>{title}</h3>
            <p>{text}</p>
            <Button title={'Деталі'} />
          </TextContainer>
          <ImageContainer>
            <img src={require(`../assets/images/${imgUrl}`)} />
          </ImageContainer>
        </Wrapper>
      </Container>
    </ServiceSection>
  );
};

export default ServiceGaleryItem;
