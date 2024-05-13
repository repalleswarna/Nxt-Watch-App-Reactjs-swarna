import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ObjectContext from '../../context/objectContext'
import {
  LoginBgContainer,
  LoginContainer,
  LogoImage,
  InputElement,
  Label,
  InputContainer,
  CheckBoxContainer,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMessage,
  ErrorMessageContainer,
} from './styledComponents'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    errorMsg: '',
    showError: false,
  }

  onChange = () => {
    this.setState(prevSt => ({showPassword: !prevSt.showPassword}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  setAndRedirect = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 5})

    history.replace('/')
  }

  failureMsg = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const user = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setAndRedirect(data.jwt_token)
    } else {
      this.failureMsg(data.error_msg)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    const {showPassword, username, password, errorMsg, showError} = this.state
    const type = showPassword ? 'text' : 'password'
    return (
      <ObjectContext.Consumer>
        {value => {
          const {theme} = value
          const logoImage = theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <LoginBgContainer colors={theme}>
              <LoginContainer colors={theme} onSubmit={this.onSubmitDetails}>
                <LogoImage src={logoImage} alt="website logo" />
                <InputContainer>
                  <Label colors={theme} htmlFor="username">
                    Username
                  </Label>
                  <InputElement
                    placeholder="Username"
                    id="username"
                    type="text"
                    colors={theme}
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="password">Password</Label>
                  <InputElement
                    placeholder="Password"
                    id="password"
                    type={type}
                    colors={theme}
                    onChange={this.onChangePassword}
                    value={password}
                  />
                </InputContainer>
                <CheckBoxContainer>
                  <CheckBox
                    onChange={this.onChange}
                    id="check-box"
                    type="checkbox"
                    checked={showPassword}
                  />
                  <CheckBoxLabel colors={theme} htmlFor="check-box">
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxContainer>
                <LoginButton>Login</LoginButton>
                {showError && (
                  <ErrorMessageContainer>
                    <ErrorMessage>*{errorMsg}</ErrorMessage>
                  </ErrorMessageContainer>
                )}
              </LoginContainer>
            </LoginBgContainer>
          )
        }}
      </ObjectContext.Consumer>
    )
  }
}

export default Login
