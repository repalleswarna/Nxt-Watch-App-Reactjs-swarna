import ObjectContext from '../../context/objectContext'
import {
  GamingListItem,
  LinkGaming,
  ImageGame,
  Description,
} from './styledComponents'

const GamingCartItem = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <ObjectContext.Consumer>
      {value => {
        const {theme} = value
        const text = theme ? '#0f0f0f' : '#f9f9f9'
        return (
          <GamingListItem>
            <LinkGaming to={`/videos/${id}`}>
              <ImageGame src={thumbnailUrl} alt="video thumbnail" />
              <Description colors={text} size={17}>
                {title}
              </Description>
              <Description colors="#94a3b8" size={13}>
                {viewCount} Watching Worldwide
              </Description>
            </LinkGaming>
          </GamingListItem>
        )
      }}
    </ObjectContext.Consumer>
  )
}

export default GamingCartItem
