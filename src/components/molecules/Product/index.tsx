import React, { ImgHTMLAttributes, useCallback } from 'react';
import { Container, ImageContainer, TextContainer} from './style';
import { productImage } from '../../../services/getAllProducts/getAllProductsInterface'

export interface ProductProps extends ImgHTMLAttributes<HTMLDivElement> {
  name: string;
  productImage: productImage[];
  price: string;
  image?: string;
  id: string;
}

const Product: React.FC<ProductProps> = ({ name, productImage, price, id }) => {

  const redirect = useCallback((id: string) => {
    window.location.href= `/product?${id}`;
  }, []);

  if(!productImage) {
    return (
      <></>
    )
  } else {
    return (
      <Container onClick={() => redirect(id)}>
        {/* @ts-ignore */}
        <ImageContainer image={productImage[0].http}></ImageContainer> 

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