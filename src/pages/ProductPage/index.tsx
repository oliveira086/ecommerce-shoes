import React, { useEffect, useState } from 'react';

import { Container, MiddleContainer, ContainerImageProduct,
  ContainerPriceProduct, ImageProduct, CategoryProduct, SimpleDetail,
  NameProduct, PriceAndPayment, AmountAndBuy, ButtonBuy, LineDivision } from './style'

import Header from '../../components/molecules/Header';
import Footer from '../../components/molecules/Footer';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <MiddleContainer>
        <ContainerImageProduct>
          <ImageProduct></ImageProduct>
        </ContainerImageProduct>
        <ContainerPriceProduct>
          <CategoryProduct>Calçados</CategoryProduct>
          <SimpleDetail>Modelo: 10090<br></br>Referência: 019230</SimpleDetail>
          <NameProduct>Tenis Okley Chave</NameProduct>
          <PriceAndPayment>
            <h1>R$ 199,99</h1>
            <span>Até 10 x R$80,00 sem juros</span>
          </PriceAndPayment>
          <AmountAndBuy>
            <input type="text"></input>
            <ButtonBuy>COMPRAR</ButtonBuy>
          </AmountAndBuy>
        </ContainerPriceProduct>
      </MiddleContainer>
      <LineDivision></LineDivision>
      <Footer></Footer>

    </Container>
  );
};

export default HomePage;