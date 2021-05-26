import styled from 'styled-components';
import { ProductProps } from './index';

export const Container = styled.div`
  width: 15vw;
  height: 45vh;
  &:hover {
    border: 1px solid black;
  };
  margin-top: 20px;
  cursor: pointer;
`;

export const ImageContainer = styled.div<ProductProps>`
  width: 100%;
  height: 30vh;
  background-image: url(${props => props.image});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 14vh;
  padding-left: 5px;
  text {
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    line-height: 18px;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 36px;
  }
  align-items: flex-start;
  justify-content: flex-start;
`;