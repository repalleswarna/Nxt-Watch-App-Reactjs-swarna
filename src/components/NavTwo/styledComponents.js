import styled from 'styled-components'

export const NavTrendingContainer = styled.div`
  background-color: ${props => props.colors};
  display: flex;
  align-items: center;
  padding: 20px;
`

export const IconTrendingContainer = styled.div`
  background-color: ${props => props.colors};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  border-radius: 60px;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
    border-radius: 70px;
  }
`
export const HeadingTrending = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: ${props => props.colors};
  margin-left: 10px;
`
