import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ObjectContext from './context/objectContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute/protectedComponent'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {theme: true, activeTabId: 'home', videoList: []}

  changeTheme = () => {
    this.setState(preVal => ({theme: !preVal.theme}))
  }

  changeTabId = id => {
    this.setState({activeTabId: id})
  }

  addSaveList = details => {
    const {videoList} = this.state
    const isConsist = videoList.find(each => details.id === each.id)

    if (isConsist === undefined) {
      this.setState(preVal => ({videoList: [...preVal.videoList, details]}))
    } else {
      this.setState(preVal => ({
        videoList: preVal.videoList.filter(
          eachVal => eachVal.id !== details.id,
        ),
      }))
    }
  }

  render() {
    const {theme, activeTabId, videoList} = this.state
    return (
      <ObjectContext.Provider
        value={{
          theme,
          activeTabId,
          changeThem: this.changeTheme,
          changeTabId: this.changeTabId,
          addSaveList: this.addSaveList,
          saveList: videoList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ObjectContext.Provider>
    )
  }
}

export default App
