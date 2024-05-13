import {FaMoon} from 'react-icons/fa'
import {HiSun} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import SideBar from '../sideBar'
import {
  NavContainer,
  ImageLogo,
  MobileView,
  ButtonIcons,
  HandBurgerButton,
  PopupContainer,
  ClosePopup,
  LinkItemsLogo,
  LogOutIconButton,
  LogOutPopupContainer,
  LogOutMessage,
  ContainerButton,
  CancelOrConfirmButton,
  LogOutButton,
  ProfileImage,
  LgPopupContainer,
} from './styledComponents'
import ObjectContext from '../../context/objectContext'

const NavBar = props => (
  <ObjectContext.Consumer>
    {value => {
      const {theme, changeThem} = value
      const imageUrl = theme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const onChangeTheme = () => {
        changeThem()
      }

      const onLogOutButton = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <NavContainer bg={theme}>
          <LinkItemsLogo to="/">
            <ImageLogo src={imageUrl} alt="website logo" />
          </LinkItemsLogo>

          <MobileView>
            <ButtonIcons
              data-testid="theme"
              type="button"
              onClick={onChangeTheme}
            >
              {theme ? (
                <FaMoon size={25} color="#212121" />
              ) : (
                <HiSun size={25} color="#f9f9f9" />
              )}
            </ButtonIcons>

            <Popup
              modal
              trigger={
                <HandBurgerButton>
                  <GiHamburgerMenu
                    color={`${theme ? '#212121' : '#f9f9f9'}`}
                    size={25}
                  />
                </HandBurgerButton>
              }
            >
              {close => (
                <PopupContainer colors={theme}>
                  <ClosePopup onClick={() => close()} type="button">
                    <AiOutlineClose
                      size={25}
                      color={`${theme ? '#212121' : '#f9f9f9'}`}
                    />
                  </ClosePopup>
                  <SideBar />
                </PopupContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogOutIconButton type="button">
                  <FiLogOut
                    size={25}
                    color={`${theme ? '#212121' : '#f9f9f9'}`}
                  />
                </LogOutIconButton>
              }
            >
              {close => (
                <LogOutPopupContainer themes={theme}>
                  <LogOutMessage themes={theme}>
                    Are you sure you want to logout?
                  </LogOutMessage>
                  <ContainerButton>
                    <CancelOrConfirmButton
                      onClick={() => close()}
                      cancel
                      type="button"
                    >
                      Cancel
                    </CancelOrConfirmButton>
                    <CancelOrConfirmButton
                      type="button"
                      onClick={onLogOutButton}
                    >
                      Confirm
                    </CancelOrConfirmButton>
                  </ContainerButton>
                </LogOutPopupContainer>
              )}
            </Popup>

            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <LgPopupContainer>
              <Popup
                modal
                trigger={
                  <LogOutButton colors={theme} type="button">
                    Logout
                  </LogOutButton>
                }
              >
                {close => (
                  <LogOutPopupContainer themes={theme}>
                    <LogOutMessage themes={theme}>
                      Are you sure, you want to logout
                    </LogOutMessage>
                    <ContainerButton>
                      <CancelOrConfirmButton
                        onClick={() => close()}
                        cancel
                        type="button"
                      >
                        Cancel
                      </CancelOrConfirmButton>
                      <CancelOrConfirmButton
                        type="button"
                        onClick={onLogOutButton}
                      >
                        Confirm
                      </CancelOrConfirmButton>
                    </ContainerButton>
                  </LogOutPopupContainer>
                )}
              </Popup>
            </LgPopupContainer>
          </MobileView>
        </NavContainer>
      )
    }}
  </ObjectContext.Consumer>
)

export default withRouter(NavBar)
