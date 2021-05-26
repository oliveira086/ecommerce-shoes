import React, { useEffect, useState } from 'react';


import { Container, MiddleContainer,
  ProductsContainer, TitleProductsContainer } from './style'

import Header from '../../components/molecules/Header';
import Product from '../../components/molecules/Product';
import LineDivision from '../../components/atoms/LineDivison';
import Footer from '../../components/molecules/Footer';

import ShoesServices from '../../services/getAllProducts';
import { product } from '../../services/getAllProducts/getAllProductsInterface';

const HomePage: React.FC = () => {
  const [data, setData] = useState<product[]>([]);

  useEffect(() => {
    const SHOES_SERVICE = new ShoesServices();
    SHOES_SERVICE.getAllServices().then(res => {
      setData(res.data.Products)
   })
  }, []);

  return (
    <Container>
      <Header></Header>
      <MiddleContainer>
        <ProductsContainer>
          <TitleProductsContainer>
            <span>CALÇADOS MASCULINOS</span>
          </TitleProductsContainer>
          {data.map(x => {
            return <Product name={ x.Product.name } productImage={ x.Product.ProductImage }
            price={ x.Product.price } id={ x.Product.id }></Product>
          })}
        </ProductsContainer>
      </MiddleContainer>
      <LineDivision></LineDivision>
      <Footer></Footer>
    </Container>
  );
};

export default HomePage;