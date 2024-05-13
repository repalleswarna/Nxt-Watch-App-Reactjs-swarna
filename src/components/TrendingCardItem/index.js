import ObjectContext from '../../context/objectContext'

import {
  TrendingList,
  LinkTrending,
  ImageTrending,
  ContentTrending,
  ProfileTrending,
  DescriptionTrending,
  DescriptionTrendingContainer,
  DetailsTrendingContainer,
  ViewsAndCountContainer,
} from './styledComponents'

const TrendingCart = props => {
  const {details} = props
  const {thumbnailUrl, id, channel, title, viewCount, publishedAt} = details
  const {profileImageUrl, name} = channel

  return (
    <ObjectContext.Consumer>
      {value => {
        const {theme} = value
        const text = theme ? '#0f0f0f' : '#f9f9f9'
        return (
          <TrendingList>
            <LinkTrending to={`/videos/${id}`}>
              <ImageTrending src={thumbnailUrl} alt="video thumbnail" />
              <ContentTrending>
                <ProfileTrending src={profileImageUrl} alt="channel logo" />
                <DescriptionTrendingContainer>
                  <DescriptionTrending colors={text} size={18}>
                    {title}
                  </DescriptionTrending>

                  <DetailsTrendingContainer>
                    <DescriptionTrending colors="#94a3b8" size={14}>
                      {name}
                    </DescriptionTrending>
                    <ViewsAndCountContainer>
                      <DescriptionTrending colors="#94a3b8" size={14}>
                        {viewCount} views
                      </DescriptionTrending>
                      <DescriptionTrending colors="#94a3b8" size={14}>
                        {publishedAt}
                      </DescriptionTrending>
                    </ViewsAndCountContainer>
                  </DetailsTrendingContainer>
                </DescriptionTrendingContainer>
              </ContentTrending>
            </LinkTrending>
          </TrendingList>
        )
      }}
    </ObjectContext.Consumer>
  )
}

export default TrendingCart
