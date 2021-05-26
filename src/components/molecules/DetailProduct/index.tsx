import React from 'react';
import { DetailProps } from '../../../pages/ProductPage';
import { Container } from './style';

const DetailProduct: React.FC<DetailProps> = ({ detail }) => {

  return (
    <Container dangerouslySetInnerHTML={{__html: detail|| '<p></p>'}} >
    </Container>
  );

}

export default DetailProduct;