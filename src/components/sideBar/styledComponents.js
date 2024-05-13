import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const OptionContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.colors};

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`

export const LinkItems = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.themes};
  background-color: ${props => props.colors};
`

export const UnOrderListOfOption = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const ListOption = styled.li``

export const OptionName = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 10px;
  width: 150px;
  color: '#606060';
  font-weight: ${props => (props.isActive ? 'bolder' : 400)};
`

export const BottomBarContent = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
`

export const ContactUsPara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.colors ? '#1e293b' : '#f8fafc')};
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ThumbImage = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const ParaContent = styled(ContactUsPara)`
  font-size: 16px;
  font-weight: 500;
`
