import React from 'react';
import { Container, ContainerTitle, ContainerBodyFooter, InstitutionalContainer, ContactContainer, PaymentContainer,
  ContactItem, ContactIcon, Payment, Boleto, CreditCard, SecurityContainer } from './style';

  
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
  
const Footer: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <div>INSTITUCIONAL</div>
        <div>ENTRE EM CONTATO CONOSCO</div>
        <div>PAGAMENTO</div>
        <div>SEGURANÇA</div>
      </ContainerTitle>
      <ContainerBodyFooter>
        <InstitutionalContainer>
          <span>Empresa</span>
          <span>Como comprar</span>
          <span>Seguranca</span>
          <span>Pagamento</span>
        </InstitutionalContainer>
        <ContactContainer>
          <ContactItem>
            <ContactIcon><FiPhone/></ContactIcon>
            (11)909000000
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <AiOutlineMail/>
            </ContactIcon>
            contato@thespom.com.br
          </ContactItem>
        </ContactContainer>
        <PaymentContainer>
          <Payment>
            <span>Á VISTA</span>
            <Boleto></Boleto>
          </Payment>
          <Payment>
            <span>PAGAMENTO PARCELADO</span>
            <CreditCard></CreditCard>
          </Payment>
        </PaymentContainer>
        <SecurityContainer>
          <div></div>
        </SecurityContainer>


      </ContainerBodyFooter>
    </Container>
  )
}
export default Footer;