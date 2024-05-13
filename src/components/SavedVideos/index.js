import ObjectContext from '../../context/objectContext'
import NavBar from '../NavBar'
import SideBar from '../sideBar'
import NavTwo from '../NavTwo'
import TrendingCart from '../TrendingCardItem'

import {
  SavedVideosContainer,
  SideBarContainer,
  SavedVideosContentContainer,
  SavedVideosContent,
  CartSavedVideos,
  NoVideosContainer,
  ImageNoVideos,
  HeadingNoVideos,
  ParaNoVideos,
} from './styledComponents'

const successView = () => (
  <ObjectContext.Consumer>
    {value => {
      const {saveList} = value
      return (
        <CartSavedVideos>
          {saveList.map(each => (
            <TrendingCart key={each.id} details={each} />
          ))}
        </CartSavedVideos>
      )
    }}
  </ObjectContext.Consumer>
)

const noVideosView = () => (
  <ObjectContext.Consumer>
    {value => {
      const {theme} = value
      const textColors = theme ? '#0f0f0f' : '#f9f9f9'
      return (
        <NoVideosContainer>
          <ImageNoVideos
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <HeadingNoVideos colors={textColors}>
            No saved videos found
          </HeadingNoVideos>
          <ParaNoVideos>
            You can save your videos while watching them
          </ParaNoVideos>
        </NoVideosContainer>
      )
    }}
  </ObjectContext.Consumer>
)

const SavedVideos = () => (
  <ObjectContext.Consumer>
    {value => {
      const {theme, saveList} = value
      const bgColors = theme ? '#f9f9f9' : '#0f0f0f'
      const isVideos = saveList.length === 0
      return (
        <SavedVideosContainer data-testid="savedVideos" colors={bgColors}>
          <NavBar />
          <SavedVideosContentContainer>
            <SideBarContainer themes={theme}>
              <SideBar />
            </SideBarContainer>
            <SavedVideosContent>
              <NavTwo heading="Saved Videos" />
              {isVideos ? noVideosView() : successView()}
            </SavedVideosContent>
          </SavedVideosContentContainer>
        </SavedVideosContainer>
      )
    }}
  </ObjectContext.Consumer>
)

export default SavedVideos
