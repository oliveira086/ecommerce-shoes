import styled from 'styled-components';

import { ProductInterface } from './index';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 220vh;
  align-items: center;
`;

export const MiddleContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 90vh;
`;

export const ContainerImageProduct = styled.div`
  display: flex;
  width: 50vw;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

export const ContainerPriceProduct = styled.div`
  width: 50vw;
  height: 90vh;
  padding-top: 3vh;
`;

export const ImageProduct = styled.div<ProductInterface>` 
  width: 40vw;
  height: 40vw;
  background-image: url(${props => props?.image});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CategoryProduct = styled.div`
  width: 50vw;
  height: 5vh;
`;

export const SimpleDetail = styled.div`
  width: 50vw;
  height: 8vh;
`;

export const NameProduct = styled.div`
  display: flex;
  width: 50vw;
  height: 10vh;
  font-size: 26px;
  font-weight: 600;
  text-align: left;
  align-items: center;
  margin-top: 10vh;
  font-style: italic;
`;

export const PriceAndPayment = styled.div`
  width: 50vw;
  height: 10vh;
  h1 {
    font-size: 26px;
    font-weight: 600;
    text-align: left;
  }
  span {
    font-size: 16px;
    font-weight: 300;
    text-align: left;
  }
`;

export const AmountAndBuy = styled.div`
  display: flex;
  width: 50vw;
  height: 10vh;
  flex-direction: row;
  margin-top: 10vh;
  input {
    width: 10vh;
    height: 10vh;
    text-align: center;
    margin-right: 10vh;
  }
`;

export const ButtonBuy = styled.button`
  width: 20vw;
  height: 10vh;
  background-color: #C4C4C4;
  border-style: none;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

export const ContainerDetailsProduct = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 5vw;
`;

export const ImageDetailsProduct = styled.div<ProductInterface>`
  width: 30vw;
  height: 30vw;
  background-image: url(${props => props?.image});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
`;