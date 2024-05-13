import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import ObjectContext from '../../context/objectContext'

import {
  OptionContainer,
  LinkItems,
  UnOrderListOfOption,
  ListOption,
  OptionName,
  BottomBarContent,
  ContactUsPara,
  LogoContainer,
  ThumbImage,
  ParaContent,
} from './styledComponents'

const SideBar = () => (
  <ObjectContext.Consumer>
    {value => {
      const {theme, activeTabId, changeTabId} = value

      const onChangeHome = () => {
        changeTabId('home')
      }

      const onChangeTrending = () => {
        changeTabId('trending')
      }

      const onChangeGaming = () => {
        changeTabId('gaming')
      }

      const onChangeSavedVideos = () => {
        changeTabId('saved-videos')
      }

      const themeColor = theme ? '#212121' : '#d7dfe9'
      const bgList = theme ? '#d7dfe9' : '#424242'
      return (
        <OptionContainer colors={theme}>
          <UnOrderListOfOption colors={theme}>
            <ListOption id="home" onClick={onChangeHome}>
              <LinkItems
                colors={activeTabId === 'home' ? bgList : 'transparent'}
                themes={themeColor}
                to="/"
              >
                <AiFillHome
                  color={activeTabId === 'home' ? '#ff0b37' : '#909090'}
                  size={20}
                />
                <OptionName isActive={activeTabId === 'home'}>Home</OptionName>
              </LinkItems>
            </ListOption>

            <ListOption id="trending" onClick={onChangeTrending}>
              <LinkItems
                colors={activeTabId === 'trending' ? bgList : 'transparent'}
                themes={themeColor}
                to="/trending"
              >
                <HiFire
                  color={activeTabId === 'trending' ? '#ff0b37' : '#909090'}
                  size={20}
                />
                <OptionName isActive={activeTabId === 'trending'}>
                  Trending
                </OptionName>
              </LinkItems>
            </ListOption>

            <ListOption id="gaming" onClick={onChangeGaming}>
              <LinkItems
                colors={activeTabId === 'gaming' ? bgList : 'transparent'}
                themes={themeColor}
                to="/gaming"
              >
                <SiYoutubegaming
                  color={activeTabId === 'gaming' ? '#ff0b37' : '#909090'}
                  size={20}
                />
                <OptionName isActive={activeTabId === 'gaming'}>
                  Gaming
                </OptionName>
              </LinkItems>
            </ListOption>

            <ListOption onClick={onChangeSavedVideos}>
              <LinkItems
                colors={activeTabId === 'saved-videos' ? bgList : 'transparent'}
                themes={themeColor}
                to="/saved-videos"
              >
                <MdPlaylistAdd
                  color={activeTabId === 'saved-videos' ? '#ff0b37' : '#909090'}
                  size={20}
                />
                <OptionName isActive={activeTabId === 'saved-videos'}>
                  Saved videos
                </OptionName>
              </LinkItems>
            </ListOption>
          </UnOrderListOfOption>

          <BottomBarContent>
            <ContactUsPara colors={theme}>CONTACT US</ContactUsPara>

            <LogoContainer>
              <ThumbImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />

              <ThumbImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ThumbImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt=" linked in logo"
              />
            </LogoContainer>

            <ParaContent colors={theme}>
              Enjoy! Now to see your channels and recommendations!
            </ParaContent>
          </BottomBarContent>
        </OptionContainer>
      )
    }}
  </ObjectContext.Consumer>
)

export default SideBar
