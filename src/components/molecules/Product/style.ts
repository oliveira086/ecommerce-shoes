import styled from 'styled-components';

export const Container = styled.div`
  width: 15vw;
  height: 45vh;
  &:hover {
    border: 1px solid black;
  };
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: coral;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 14vh;
  padding-left: 5px;
  text {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    line-height: 12px;
  }
  span {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    line-height: 36px;
  }
  align-items: flex-start;
`;