import React from 'react';
import { Container, ImageContainer, TextContainer} from './style';

const Product: React.FC = () => {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <TextContainer>
        <span>Calçados</span>
        <text>Tênis Okley Chave</text>
        <span>R$ 299,00</span>
      </TextContainer>
    </Container>
  )
}

export default Product;