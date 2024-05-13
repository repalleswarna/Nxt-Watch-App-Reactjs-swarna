import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeList = styled.li`
  width: 100%;
  margin-right: 15px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ImageItem = styled.img`
  width: 100%;
`

export const DetailsWithLogoContainer = styled.div`
  display: flex;
`

export const ImageProfile = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 20px;
  margin-right: 10px;
`

export const DescriptionContainer = styled.div``

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.textColors};
`

export const VideoDetail = styled(Description)`
  font-size: 13px;
  color: #616e7c;
  margin-right: 10px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`
