import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingList = styled.li`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
`

export const LinkTrending = styled(Link)`
  text-decoration: none;

  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const ImageTrending = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 250px;
    height: 150px;
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 180px;
    margin-right: 15px;
  }
`

export const ContentTrending = styled.div`
  display: flex;
  margin-top: 10px;
`

export const ProfileTrending = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const DescriptionTrendingContainer = styled.div``

export const DescriptionTrending = styled.p`
  font-family: 'Roboto';
  color: ${props => props.colors};
  font-size: ${props => props.size}px;
  margin-right: 10px;
  margin-top: 0px;
`

export const DetailsTrendingContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ViewsAndCountContainer = styled.div`
  display: flex;
  align-items: center;
`
