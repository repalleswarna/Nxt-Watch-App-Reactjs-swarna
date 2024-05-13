import ObjectContext from '../../context/objectContext'
import NavBar from '../NavBar'
import SideBar from '../sideBar'
import {
  NotFoundContainer,
  SideBarContainer,
  NotFoundContentContainer,
  NotFoundContent,
  ImageNotFound,
  HeadingNot,
  ParaNot,
} from './styledComponents'

const NotFound = () => (
  <ObjectContext.Consumer>
    {value => {
      const {theme} = value
      const bgColor = theme ? '#f9f9f9' : '#0f0f0f'
      const textClr = theme ? ' #0f0f0f' : '#f9f9f9'
      const imageUrl = theme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <NotFoundContainer colors={bgColor}>
          <NavBar />
          <NotFoundContentContainer>
            <SideBarContainer themes={theme}>
              <SideBar />
            </SideBarContainer>

            <NotFoundContent>
              <ImageNotFound src={imageUrl} alt="not found" />
              <HeadingNot colors={textClr}>Page Not Found</HeadingNot>
              <ParaNot>
                we are sorry, the page you requested could not be found.
              </ParaNot>
            </NotFoundContent>
          </NotFoundContentContainer>
        </NotFoundContainer>
      )
    }}
  </ObjectContext.Consumer>
)

export default NotFound
