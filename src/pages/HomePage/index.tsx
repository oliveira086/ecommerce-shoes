import React from 'react';
import { Container, MiddleContainer, FilterContainer,
  ProductsContainer, TitleProductsContainer } from './style'

import Header from '../../components/molecules/Header';
import Product from '../../components/molecules/Product';

const HomePage: React.FC = () => {
  const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <Container>
      <Header></Header>
      <MiddleContainer>
        <FilterContainer></FilterContainer>
        <ProductsContainer>
          <TitleProductsContainer>
            <span>CALÇADOS MASCULINOS</span>
          </TitleProductsContainer>
          {lista.map(x => {
            return <Product></Product>
          })}
        </ProductsContainer>
      </MiddleContainer>
    </Container>
  );
};

export default HomePage;