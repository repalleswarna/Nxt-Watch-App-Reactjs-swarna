import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingListItem = styled.li`
  margin: 15px;
  width: 40%;

  @media screen and (min-width: 576px) {
    width: 23%;
  }
`

export const LinkGaming = styled(Link)`
  text-decoration: none;
`
export const ImageGame = styled.img`
  width: 100%;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
  color: ${props => props.colors};
  margin-top: 0px;
`
