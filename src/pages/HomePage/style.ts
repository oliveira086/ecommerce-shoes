import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 99vw;
  height: 200vh;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70vw;
  height: 100%;
  padding: 5px;
  justify-content: space-around;
  align-items: flex-start;
  
`;

export const TitleProductsContainer = styled.div`
  width: 70vw;
  height: 8vh;
  span {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    line-height: 36px;
    font-style: italic;
  }
`;