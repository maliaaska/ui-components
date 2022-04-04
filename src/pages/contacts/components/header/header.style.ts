import styled from 'styled-components'

export const HeaderStyled = styled.header`
  margin: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Monaco;
  min-height: 64px;
  padding: 16px;
  align-items: center;
  button {
    color: white;
    min-width: 15%;
    font-weight: bold;
    border: none;
    background-color: #1e90ff;
    border-radius: 5px;
  }
  p {
    color: gray;
  }
  h1 {
    color: blueviolet;
    font-weight: bold;
  }
`
export const HeaderLeftBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 50%;
  align-items: center;
  p {
    font-size: 10px;
  }
`
export const HeaderRightBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  min-width: 50%;
  min-height: 50px;
  align-items: center;
  border-radius: 5px;
  div {
    display: flex;
    flex-direction: row;
    background-color: #1e90ff;
    border-radius: 5px;
    min-height: 24px;
  }
`
export const AddContactImg = styled.div`
  height: 20px;
  width: 24px;
  background-size: 100%;
`
