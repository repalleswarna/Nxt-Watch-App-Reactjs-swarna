import styled from 'styled-components'

export const GameContainer = styled.div`
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
export const GamingContentContainer = styled.div`
  display: flex;
`

export const GamingContent = styled.div`
  flex-grow: 1;
`

export const GamingUlContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
