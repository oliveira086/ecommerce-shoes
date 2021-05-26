import React, { useEffect, useState, ImgHTMLAttributes } from 'react';

import { Container, MiddleContainer, ContainerImageProduct,
  ContainerPriceProduct, ImageProduct, CategoryProduct, SimpleDetail,
  NameProduct, PriceAndPayment, AmountAndBuy, ButtonBuy, LineDivision,
  ContainerDetailsProduct, 
  ImageDetailsProduct } from './style';

import getOneProductService from '../../services/getOneProduct'
import { product } from '../../services/getOneProduct/getOneProductInterface'

import Header from '../../components/molecules/Header';
import Footer from '../../components/molecules/Footer';
import DetailProduct from '../../components/molecules/DetailProduct';

export interface ProductInterface extends ImgHTMLAttributes<HTMLDivElement> {
  image?: string;
}

export interface DetailProps {
  detail: string | undefined
}


const ProductPage: React.FC<ProductInterface> = () => {
  const [data, setData] = useState<product>();

  useEffect(() => {

    function getQueryParams() {
      return window.location.search.substr(1)
    }

    async function getProduct (id: string) {
      console.log(id)
      const PRODUCT_SERVICE = new getOneProductService();
      let res = await PRODUCT_SERVICE.getOneService(id);
      let product = await res.data.Product
      setData(product);
    };

    
    getProduct(getQueryParams()); 

  },[]);

  return (
    <Container>
      <Header></Header>
      <MiddleContainer>
        <ContainerImageProduct>
          <ImageProduct image={data?.ProductImage[0].http}></ImageProduct> 
        </ContainerImageProduct>
        <ContainerPriceProduct>
          <CategoryProduct>Calçados</CategoryProduct>
          <SimpleDetail>Modelo: 10090<br></br>Referência: 019230</SimpleDetail>
          <NameProduct>{}</NameProduct>
          <PriceAndPayment>
            <h1>R$ 199,99</h1>
            <span>Até 10 x R$80,00 sem juros</span>
          </PriceAndPayment>
          <AmountAndBuy>
            <input type="text" value="1"></input>
            <ButtonBuy>COMPRAR</ButtonBuy>
          </AmountAndBuy>
        </ContainerPriceProduct>
      </MiddleContainer>
      <LineDivision></LineDivision>
      <ContainerDetailsProduct>
        <ImageDetailsProduct image={data?.ProductImage[0].http}></ImageDetailsProduct>
        <DetailProduct detail={data?.description || ''}></DetailProduct>
      </ContainerDetailsProduct>
      <LineDivision></LineDivision>
      <Footer></Footer>
    </Container>
  );
};

export default ProductPage;