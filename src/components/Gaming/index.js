import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ObjectContext from '../../context/objectContext'
import NavBar from '../NavBar'
import SideBar from '../sideBar'
import NavTwo from '../NavTwo'
import GamingCartItem from '../GamingCartItem'
import FailureView from '../FailureView'

import {
  GameContainer,
  SideBarContainer,
  GamingContentContainer,
  GamingContent,
  GamingUlContainer,
  LoaderContainer,
} from './styledComponents'

const constantStatus = {
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inprogress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {gamingDetails: [], status: constantStatus.inprogress}

  componentDidMount = () => {
    this.getGamingDetails()
  }

  updatedData = data => {
    const updated = data.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
    }))

    return updated
  }

  getGamingDetails = async () => {
    this.setState({status: constantStatus.loading})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = this.updatedData(data.videos)
      this.setState({
        gamingDetails: updatedData,
        status: constantStatus.success,
      })
    } else {
      this.setState({status: constantStatus.failure})
    }
  }

  successView = () => {
    const {gamingDetails} = this.state

    return (
      <GamingUlContainer>
        {gamingDetails.map(each => (
          <GamingCartItem key={each.id} details={each} />
        ))}
      </GamingUlContainer>
    )
  }

  retry = () => {
    this.getGamingDetails()
  }

  failureView = () => <FailureView retry={this.retry} />

  loaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  switchStatus = () => {
    const {status} = this.state

    switch (status) {
      case constantStatus.loading:
        return this.loaderView()
      case constantStatus.success:
        return this.successView()
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
          const gameBg = theme ? '#f9f9f9' : '#0f0f0f'
          return (
            <GameContainer colors={gameBg} data-testid="gaming">
              <NavBar />
              <GamingContentContainer>
                <SideBarContainer themes={theme}>
                  <SideBar />
                </SideBarContainer>
                <GamingContent>
                  <NavTwo heading="Gaming" />
                  {this.switchStatus()}
                </GamingContent>
              </GamingContentContainer>
            </GameContainer>
          )
        }}
      </ObjectContext.Consumer>
    )
  }
}

export default Gaming
