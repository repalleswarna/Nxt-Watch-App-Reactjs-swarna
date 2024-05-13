import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.colors};
`

export const SavedVideosContentContainer = styled.div`
  display: flex;
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

export const CartSavedVideos = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`

export const SavedVideosContent = styled.div`
  flex-grow: 1;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageNoVideos = styled.img`
  width: 40%;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const HeadingNoVideos = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.colors};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const ParaNoVideos = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
`
