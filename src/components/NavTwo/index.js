import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import ObjectContext from '../../context/objectContext'

import {
  NavTrendingContainer,
  IconTrendingContainer,
  HeadingTrending,
} from './styledComponents'

const NavTwo = props => {
  const {heading} = props

  const getIcon = () => {
    switch (heading) {
      case 'Trending':
        return <HiFire color="#ff0b37" size={30} />
      case 'Gaming':
        return <SiYoutubegaming color="#ff0b37" size={30} />
      case 'Saved Videos':
        return <HiFire color="#ff0b37" size={30} />
      default:
        return null
    }
  }

  return (
    <ObjectContext.Consumer>
      {value => {
        const {theme} = value
        const navBg = theme ? '#ebebeb' : ' #181818'
        const iconBg = theme ? '#cbd5e1' : '#0f0f0f'
        const text = theme ? '#0f0f0f' : '#f9f9f9'
        return (
          <NavTrendingContainer colors={navBg}>
            <IconTrendingContainer colors={iconBg}>
              {getIcon()}
            </IconTrendingContainer>
            <HeadingTrending colors={text}>{heading}</HeadingTrending>
          </NavTrendingContainer>
        )
      }}
    </ObjectContext.Consumer>
  )
}

export default NavTwo
