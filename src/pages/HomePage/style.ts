import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  justify-content: space-between;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 80vh;
  justify-content: space-around;
`;

export const FilterContainer = styled.div`
  width: 20vw;
  height: 100%;
  background-color: #898989;
  border-radius: 10px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70vw;
  height: 100%;
  padding: 5px;
  justify-content: space-around;
  overflow-y: scroll;
  
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