import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.nav`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.bg ? '#f9f9f9' : '#212121')};
`
export const ImageLogo = styled.img`
  width: 100px;
`

export const MobileView = styled.div`
  display: flex;
  align-items: center;
`

export const LinkItemsLogo = styled(Link)`
  text-decoration: none;
`

export const ListItemMobile = styled.li``

export const ButtonIcons = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`

export const HandBurgerButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.colors ? '#f9f9f9' : '#231f20')};
`

export const ClosePopup = styled.button`
  height: 30px;
  width: 30px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  align-self: flex-end;
`
export const LogOutIconButton = styled(HandBurgerButton)``

export const LogOutPopupContainer = styled.div`
  width: 300px;
  height: 170px;
  background-color: ${props => (props.themes ? '#ffffff' : '#212121')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogOutMessage = styled.p`
  font-family: 'Roboto'
  font-size: 17px;
  color: ${props => (props.themes ? '#212121' : '#ffffff')};
  font-weight: 500;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`

export const CancelOrConfirmButton = styled.button`
  padding: 10px;
  border: ${props => (props.cancel ? 'solid 2px #909090' : 'none')};
  background-color: ${props => (props.cancel ? 'transparent' : '#3b82f6')};
  color: ${props => (props.cancel ? '#909090' : '#ffffff')};
  font-weight: bold;
  margin-right: 20px;
  font-family: 'Roboto';
`

export const LogOutButton = styled.button`
  display: none;
  background: transparent;
  border: ${props =>
    props.colors ? 'solid 1px #3b82f6' : 'solid 1px #ffffff'};
  color: ${props => (props.colors ? '#3b82f6' : '#ffffff')};
  height: 25px;
  width: 70px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const DeskTopViews = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 23px;
  margin-left: 10px;
  margin-right: 10px;
`

export const LgPopupContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
