import React, { useEffect, useState } from 'react';

import { Container, MiddleContainer, FilterContainer,
  ProductsContainer, TitleProductsContainer } from './style'

import Header from '../../components/molecules/Header';
import Product from '../../components/molecules/Product';
import Footer from '../../components/molecules/Footer';

import ShoesServices from '../../services/getAllShoes';
import { product } from '../../services/getAllShoes/getAllShoesInterface';

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
        <FilterContainer></FilterContainer>
        <ProductsContainer>
          <TitleProductsContainer>
            <span>CALÇADOS MASCULINOS</span>
          </TitleProductsContainer>
          {data.map(x => {
            console.log(x.Product)
            return <Product name={x.Product.name} productImage={x.Product.ProductImage} price={x.Product.price} ></Product>
          })}
        </ProductsContainer>
      </MiddleContainer>
      <Footer></Footer>
    </Container>
  );
};

export default HomePage;