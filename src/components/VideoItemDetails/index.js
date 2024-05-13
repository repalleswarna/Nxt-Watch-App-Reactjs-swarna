import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import SideBar from '../sideBar'
import FailureView from '../FailureView'

import ObjectContext from '../../context/objectContext'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsContent,
  SideBarContainer,
  ContentContainer,
  ParaDetail,
  ViewsAndLikesContainer,
  ViewsDetails,
  ParaView,
  LikeDisLikeSaveContainer,
  LDSContainer,
  HrLine,
  ProfileContainer,
  ImageProfile,
  LoaderContainer,
  NameContainer,
  Name,
  Description,
} from './styledComponents'

const constantStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  inprogress: 'INPROGRESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {videoDetails: {}, status: constantStatus.inprogress}

  componentDidMount = () => {
    this.getVideoDetails()
  }

  getUpdatedData = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    viewCount: data.view_count,
    publishedAt: formatDistanceToNow(new Date(data.published_at)),
    description: data.description,
  })

  getVideoDetails = async () => {
    this.setState({status: constantStatus.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updated = this.getUpdatedData(data.video_details)
      this.setState({
        videoDetails: updated,
        like: false,
        dislike: false,
        status: constantStatus.success,
      })
    } else {
      this.setState({
        status: constantStatus.failure,
      })
    }
  }

  onLike = () => {
    this.setState(oldVal => ({
      like: !oldVal.like,
      dislike: false,
    }))
  }

  onDisLike = () => {
    this.setState(oldVal => ({dislike: !oldVal.dislike, like: false}))
  }

  successView = () => (
    <ObjectContext.Consumer>
      {value => {
        const {addSaveList, theme, saveList} = value
        const {videoDetails} = this.state

        const {
          videoUrl,
          description,
          title,
          publishedAt,
          viewCount,
          channel,
        } = videoDetails
        const {profileImageUrl, name, subscriberCount} = channel
        const textColors = theme ? '#0f0f0f' : '#f9f9f9'
        const {like, dislike} = this.state
        const likeClr = like ? '#2563eb' : '#64748b'
        const dislikeClr = dislike ? '#2563eb' : '#64748b'
        const onSave = () => {
          addSaveList(videoDetails)
        }
        const isSave = saveList.find(each => videoDetails.id === each.id)
        const saveClr = isSave ? '#2563eb' : '#64748b'
        const saveTxt = isSave ? 'Saved' : 'Save'
        return (
          <>
            <ReactPlayer url={videoUrl} controls width="100%" />
            <ParaDetail colors={textColors}>{title}</ParaDetail>
            <ViewsAndLikesContainer>
              <ViewsDetails>
                <ParaView>{viewCount} views</ParaView>
                <ParaView>{publishedAt}</ParaView>
              </ViewsDetails>

              <LikeDisLikeSaveContainer>
                <LDSContainer colors={likeClr} onClick={this.onLike}>
                  <BiLike size={20} /> Like
                </LDSContainer>

                <LDSContainer colors={dislikeClr} onClick={this.onDisLike}>
                  <BiDislike size={20} /> Dislike
                </LDSContainer>

                <LDSContainer colors={saveClr} onClick={onSave}>
                  <MdPlaylistAdd size={20} /> {saveTxt}
                </LDSContainer>
              </LikeDisLikeSaveContainer>
            </ViewsAndLikesContainer>

            <HrLine />

            <ProfileContainer>
              <ImageProfile src={profileImageUrl} alt="channel logo" />
              <NameContainer>
                <Name size={15} colors={textColors}>
                  {name}
                </Name>
                <Name size={13} colors="#64748b">
                  {subscriberCount} subscribers
                </Name>
              </NameContainer>
            </ProfileContainer>
            <Description colors={textColors} size={14}>
              {description}
            </Description>
          </>
        )
      }}
    </ObjectContext.Consumer>
  )

  loadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  retry = () => {
    this.getVideoDetails()
  }

  failureView = () => <FailureView retry={this.retry} />

  switchStatus = () => {
    const {status} = this.state
    switch (status) {
      case constantStatus.loading:
        return this.loadingView()
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
          const backgroundColor = theme ? '#f9f9f9' : '#0f0f0f'

          return (
            <VideoItemDetailsContainer
              data-testid="videoItemDetails"
              colors={backgroundColor}
            >
              <NavBar />
              <VideoItemDetailsContent>
                <SideBarContainer themes={theme}>
                  <SideBar />
                </SideBarContainer>
                <ContentContainer>{this.switchStatus()}</ContentContainer>
              </VideoItemDetailsContent>
            </VideoItemDetailsContainer>
          )
        }}
      </ObjectContext.Consumer>
    )
  }
}

export default VideoItemDetails
