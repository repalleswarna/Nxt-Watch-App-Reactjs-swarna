import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ObjectContext from '../../context/objectContext'
import NavBar from '../NavBar'
import SideBar from '../sideBar'
import TrendingCart from '../TrendingCardItem'
import FailureView from '../FailureView'
import NavTwo from '../NavTwo'

import {
  TrendingContainer,
  TrendingBarContainer,
  TrendingContentContainer,
  TrendingContent,
  CartTrendingContainer,
  LoaderContainer,
} from './styledComponents'

const constantStatus = {
  loading: 'LOADING',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingData: [], status: constantStatus.inprogress}

  componentDidMount = () => {
    this.getTrendingDetails()
  }

  getTrendingDetails = async () => {
    this.setState({status: constantStatus.loading})
    const url = 'https://apis.ccbp.in/videos/trending'
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = this.getUpdatedData(data.videos)
      this.setState({trendingData: updatedData, status: constantStatus.success})
    } else {
      this.setState({status: constantStatus.failure})
    }
  }

  getUpdatedData = data => {
    const updated = data.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      viewCount: each.view_count,
      publishedAt: formatDistanceToNow(new Date(each.published_at)),
    }))
    return updated
  }

  renderSuccessView = () => {
    const {trendingData} = this.state
    console.log(trendingData)
    return (
      <CartTrendingContainer>
        {trendingData.map(each => (
          <TrendingCart key={each.id} details={each} />
        ))}
      </CartTrendingContainer>
    )
  }

  retry = () => {
    this.getTrendingDetails()
  }

  failureView = () => <FailureView retry={this.retry} />

  loadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  switchStatus = () => {
    const {status} = this.state
    switch (status) {
      case constantStatus.loading:
        return this.loadingView()
      case constantStatus.success:
        return this.renderSuccessView()
      case constantStatus.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ObjectContext.Consumer>
        {value => {
          const {theme} = value
          const trendingBg = theme ? '#f9f9f9' : '#0f0f0f'

          return (
            <TrendingContainer colors={trendingBg} data-testid="trending">
              <NavBar />
              <TrendingContentContainer>
                <TrendingBarContainer themes={theme}>
                  <SideBar />
                </TrendingBarContainer>

                <TrendingContent>
                  <NavTwo heading="Trending" />

                  {this.switchStatus()}
                </TrendingContent>
              </TrendingContentContainer>
            </TrendingContainer>
          )
        }}
      </ObjectContext.Consumer>
    )
  }
}

export default Trending
