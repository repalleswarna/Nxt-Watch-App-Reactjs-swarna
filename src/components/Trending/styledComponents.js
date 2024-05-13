import styled from 'styled-components'

export const TrendingContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.colors};
`
export const TrendingBarContainer = styled.div`
  display: none;
  width: 200px;
  height: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  height: 90vh;
  background-color: ${props => (props.themes ? '#f9f9f9' : '#212121')};
`

export const TrendingContentContainer = styled.div`
  display: flex;
`

export const TrendingContent = styled.div`
  flex-grow: 1;
`

export const HeadingTrending = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: ${props => props.colors};
  margin-left: 10px;
`

export const CartTrendingContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
