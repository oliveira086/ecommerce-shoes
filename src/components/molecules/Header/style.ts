import styled from 'styled-components';
import image from '../../../assets/images/Logo.png'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10vh;
  padding: 0 5vw 0 0;
  justify-content: space-around;
  border-bottom: 1px #000 solid;
`;

export const ImageContainer = styled.div`
  width: 15vw;
  height: 100%;
  background-image: url(${image});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  
`;

export const InputSearch = styled.input`
  width: 80%;
  height: 70%;
  border-style: none;
  text-align: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #E8E8E8;
`;

export const ButtonSearch = styled.div`
  display: flex;
  width: 10%;
  height: 70%;
  background-color: #000;
  border-style: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #fff;
  justify-content: center;
  align-items: center;
`;


export const BagAmountContainer = styled.div`
  display: flex;
  width: 25vh;
  height: 100%;
  color: #000;
  justify-content: space-around;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 18vh;
  height: 100%;
  color: #000;
  justify-content: space-around;
  align-items: center;
`;