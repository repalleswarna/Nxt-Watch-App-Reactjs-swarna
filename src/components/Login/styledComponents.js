import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props => (props.colors ? '#f9f9f9' : ' #181818')};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.form`
  background-color: ${props => (props.colors ? '#ffffff' : ' #000000')};
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const LogoImage = styled.img`
  width: 150px;
`

export const InputContainer = styled.div`
  width: 90%;
  margin-top: 15px;
`

export const InputElement = styled.input`
  width: 100%;
  outline: none;
  border: solid 1px #94a3b8;
  height: 28px;
  margin-top: 8px;
  background-color: transparent;
  padding-left: 15px;
  color: ${props => (props.colors ? '#000000' : '#ffffff')};
  font-family: 'Roboto';
`

export const Label = styled.label`
  color: ${props => (props.colors ? ' #64748b' : '#ffffff')};
  font-weight: 700;
  font-family: 'Roboto';
  font-size: 15px;
`

export const CheckBoxContainer = styled.div`
  width: 90%;
  margin-top: 15px;
  display: flex;
  align-items: center;
`

export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 8px;
`

export const CheckBoxLabel = styled(Label)`
  font-weight: 400;
  color: ${props => (props.colors ? '#181818' : '#ffffff')};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: none;
  padding: 8px;
  width: 90%;
  color: #ffffff;
  border-radius: 5px;
  margin-top: 15px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const ErrorMessageContainer = styled.div`
  width: 90%;
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-family: 'Roboto';
`
