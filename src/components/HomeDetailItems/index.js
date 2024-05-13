import {formatDistanceToNow} from 'date-fns'
import {
  HomeList,
  ImageItem,
  LinkItem,
  DetailsWithLogoContainer,
  ImageProfile,
  Description,
  DescriptionContainer,
  VideoDetail,
  VideoDetailsContainer,
} from './styledComponents'
import ObjectContext from '../../context/objectContext'

const HomeDetailItems = props => {
  const {details} = props
  const {thumbnailUrl, id, channel, title, viewCount, publishedAt} = details
  const {profileImageUrl, name} = channel
  return (
    <ObjectContext.Consumer>
      {value => {
        const {theme} = value
        const textColors = theme ? '#181818' : '#f9f9f9'
        const duration = formatDistanceToNow(new Date(publishedAt))
        return (
          <HomeList>
            <LinkItem to={`/videos/${id}`}>
              <ImageItem src={thumbnailUrl} alt="video thumbnail" />
              <DetailsWithLogoContainer>
                <ImageProfile src={profileImageUrl} alt="channel logo" />
                <DescriptionContainer>
                  <Description textColors={textColors}>{title}</Description>
                  <VideoDetailsContainer>
                    <VideoDetail>{name}</VideoDetail>
                    <VideoDetail>{viewCount} views</VideoDetail>
                    <VideoDetail>{duration}</VideoDetail>
                  </VideoDetailsContainer>
                </DescriptionContainer>
              </DetailsWithLogoContainer>
            </LinkItem>
          </HomeList>
        )
      }}
    </ObjectContext.Consumer>
  )
}

export default HomeDetailItems
