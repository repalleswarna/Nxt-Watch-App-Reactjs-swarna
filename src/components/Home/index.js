import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {
  HomeBgContainer,
  BarContainer,
  HomeContainer,
  HomeContentContainer,
  BannerContainer,
  LogoImage,
  BannerContentContainer,
  BannerPara,
  GetButton,
  CloseButton,
  HomeContentBottomContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeDetailsContainer,
  NoSearchResultContainer,
  NoSearchImage,
  HeadingNoSearch,
  NoResultPara,
  ReTryButton,
  LoaderContainer,
} from './styledComponents'
import NavBar from '../NavBar'
import SideBar from '../sideBar'
import ObjectContext from '../../context/objectContext'
import HomeDetailItems from '../HomeDetailItems'
import FailureView from '../FailureView/index'

const constantStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  noSearch: 'NOSEARCH',
  inprogress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    banner: true,
    searchedWord: '',
    homeDetails: [],
    searchInput: '',
    view: constantStatus.inprogress,
  }

  componentDidMount = () => {
    this.getHomeDetails()
  }

  onCloseBanner = () => {
    this.setState({banner: false})
  }

  getUpDatedValue = data => {
    const updatedVal = data.map(eachItem => ({
      channel: {
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      },
      id: eachItem.id,
      title: eachItem.title,
      thumbnailUrl: eachItem.thumbnail_url,
      viewCount: eachItem.view_count,
      publishedAt: eachItem.published_at,
    }))

    return updatedVal
  }

  getHomeDetails = async () => {
    this.setState({view: constantStatus.loading})
    const {searchedWord} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchedWord}`
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
      const updatedValue = this.getUpDatedValue(data.videos)
      this.setState({homeDetails: updatedValue, view: constantStatus.success})
    }

    if (response.ok !== true) {
      this.setState({view: constantStatus.failure})
    }
  }

  onSearchedVideo = () => {
    this.setState(
      preVal => ({searchedWord: preVal.searchInput}),
      this.getHomeDetails,
    )
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  retry = () => {
    this.getHomeDetails()
  }

  noSearchResultView = () => (
    <ObjectContext.Consumer>
      {value => {
        const {theme} = value

        const textColor = theme ? '#181818' : '#f9f9f9'

        return (
          <NoSearchResultContainer>
            <NoSearchImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <HeadingNoSearch colors={textColor}>
              No Search Results found
            </HeadingNoSearch>
            <NoResultPara>
              Try different key words or remove search filter
            </NoResultPara>
            <ReTryButton onClick={this.retry} type="button">
              Retry
            </ReTryButton>
          </NoSearchResultContainer>
        )
      }}
    </ObjectContext.Consumer>
  )

  renderHomeDetails = () => {
    const {homeDetails} = this.state
    if (homeDetails.length === 0) {
      this.setState({view: constantStatus.noSearch})
      return null
    }
    return (
      <HomeDetailsContainer>
        {homeDetails.map(each => (
          <HomeDetailItems key={each.id} details={each} />
        ))}
      </HomeDetailsContainer>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  switchView = () => {
    const {view} = this.state

    switch (view) {
      case constantStatus.loading:
        return this.renderLoaderView()
      case constantStatus.success:
        return this.renderHomeDetails()
      case constantStatus.failure:
        return this.renderFailureView()
      case constantStatus.noSearch:
        return this.noSearchResultView()
      default:
        return null
    }
  }

  renderFailureView = () => <FailureView retry={this.retry} />

  render() {
    const {banner, searchInput} = this.state
    return (
      <ObjectContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <HomeBgContainer data-testid="home" colors={theme}>
              <NavBar />
              <HomeContainer>
                <BarContainer themes={theme}>
                  <SideBar />
                </BarContainer>
                <HomeContentContainer>
                  {banner && (
                    <BannerContainer data-testid="banner">
                      <BannerContentContainer>
                        <LogoImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerPara>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerPara>
                        <GetButton type="button">GET IT NOW</GetButton>
                      </BannerContentContainer>
                      <CloseButton
                        data-testid="close"
                        onClick={this.onCloseBanner}
                        type="button"
                      >
                        <AiOutlineClose size={25} color="#212121" />
                      </CloseButton>
                    </BannerContainer>
                  )}

                  <HomeContentBottomContainer>
                    <SearchContainer>
                      <SearchInput
                        colors={theme}
                        placeholder="Search"
                        type="search"
                        onChange={this.onChangeInput}
                        value={searchInput}
                      />
                      <SearchButton
                        onClick={this.onSearchedVideo}
                        colors={theme}
                        type="button"
                        data-testid="searchButton"
                      >
                        <BiSearch size={13} />
                      </SearchButton>
                    </SearchContainer>
                    {this.switchView()}
                  </HomeContentBottomContainer>
                </HomeContentContainer>
              </HomeContainer>
            </HomeBgContainer>
          )
        }}
      </ObjectContext.Consumer>
    )
  }
}

export default Home
