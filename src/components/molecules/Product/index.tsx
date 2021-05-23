import React, { ImgHTMLAttributes } from 'react';
import { Container, ImageContainer, TextContainer} from './style';
import { productImage } from '../../../services/getAllShoes/getAllShoesInterface'

export interface ProductProps extends ImgHTMLAttributes<HTMLDivElement> {
  name: string;
  productImage: productImage[];
  price: string;
}

const Product: React.FC<ProductProps> = ({ name, productImage, price }) => {

  if(!productImage) {
    return (
      <></>
    )
  } else {
    return (
      <Container>
        <ImageContainer></ImageContainer>
        <TextContainer>
          <span>Calçados</span>
          <text>{ name }</text>
          <span>R$ { price }</span>
        </TextContainer>
      </Container>
    )
  }
}

export default Product;