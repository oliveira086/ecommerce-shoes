import styled from 'styled-components';
import boletoImagem from '../../../assets/images/boleto.png';
import masterCard from '../../../assets/images/master.png';
import ssl from '../../../assets/images/ssl.jpg';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 35vh;
  background-color: #999;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 5vh;
  div{
    display: flex;
    align-items: center;
    border-top: 1px #000 solid;
    width: 25%;
    height: 100%;
    padding-left: 3vw;
    font-weight: 600;
  }
`;

export const ContainerBodyFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30vh;
`;

export const InstitutionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  align-items: flex-start;
  padding-left: 3vw;
  span {
    &:hover{
      text-decoration: underline;
    }
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 30vh;
  align-items: flex-start;
  padding-left: 3vw;
`;

export const ContactIcon = styled.div`
  display: flex;
  width: 3vw;
  height: 3vw;
  border-radius: 100%;
  border: 1px solid #000;
  justify-content: center;
  align-items: center;
  margin-right: 1vw;
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3vw;
  align-items: center;
  margin-top: 1vw;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 30vh;
  align-items: flex-start;
  padding-left: 3vw;
`;

export const Payment = styled.div`
  width: 100%;
  height: 12vh;
`;

export const Boleto = styled.div`
  width: 25%;
  height: 60%;
  background-image: url(${boletoImagem});
  background-size: 70%;
  background-repeat: no-repeat;
`;

export const CreditCard = styled.div`
  width: 25%;
  height: 60%;
  background-image: url(${masterCard});
  background-size: 70%;
  background-repeat: no-repeat;
`;

export const SecurityContainer = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  padding-left: 3vw;
  align-items: center;
  div{
    width: 40%;
    height: 60%;
    background-image: url(${ssl});
    background-size: 70%;
    background-repeat: no-repeat;
  }
`;