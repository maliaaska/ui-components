import styled from 'styled-components'

export const ContactsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  background-color: azure;

  @media (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 991px) {
  }

  @media (min-width: 992px) {
  }
`
export const ContactWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
`
export const ContactNameStyled = styled.div`
  display: flex;
  border-radius: 50%;
  min-width: 40px;
  min-height: 40px;
  border: black 1px solid;
  margin: 5% 0 0 2%;
  justify-content: center;
  align-items: center;
`
export const ContactDataStyled = styled.div`
  margin-left: 5%;
`
export const ContactPhoneStyled = styled.div``

export const ContactMailStyled = styled.div``
