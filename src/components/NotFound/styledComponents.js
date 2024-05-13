import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.colors};
`
export const SideBarContainer = styled.div`
  display: none;
  width: 200px;
  height: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  height: 90vh;
  background-color: ${props => (props.themes ? '#f9f9f9' : '#212121')};
`

export const NotFoundContentContainer = styled.div`
  display: flex;
`
export const NotFoundContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageNotFound = styled.img`
  width: 35%;
`

export const HeadingNot = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.colors};
`

export const ParaNot = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #616e7c;
`
