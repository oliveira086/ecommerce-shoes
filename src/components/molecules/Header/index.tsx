import React from 'react';
import { Container, ImageContainer, SearchContainer,
  BagAmountContainer, LoginContainer,
  InputSearch, ButtonSearch }

from './style';

import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';


const Header: React.FC = () => {
  const redirectToHome = () => {
    window.location.href = '/'
  }
  return (
    <Container>
      <ImageContainer onClick={() => redirectToHome()}></ImageContainer>
      <SearchContainer>
        <InputSearch placeholder="O que você está buscando?"></InputSearch>
        <ButtonSearch>
          <h2><FiSearch></FiSearch></h2>
        </ButtonSearch>
      </SearchContainer>
      <BagAmountContainer>
        <h3><FiShoppingCart></FiShoppingCart></h3>
        <span>Meu carrinho</span>
      </BagAmountContainer>
      <LoginContainer>
        <h2><FiUser></FiUser></h2>
        <span>Entrar</span>
      </LoginContainer>
    </Container>
  )
}

export default Header;