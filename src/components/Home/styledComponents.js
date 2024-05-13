import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.colors ? '#f9f9f9' : '#181818')};
`
export const HomeContainer = styled.div`
  display: flex;
`

export const BarContainer = styled.div`
  display: none;
  width: 200px;
  height: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  height: 90vh;
  background-color: ${props => (props.themes ? '#f9f9f9' : '#212121')};
`
export const HomeContentContainer = styled.div`
  width: 100%;
`

export const BannerContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const LogoImage = styled.img`
  width: 150px;
`

export const BannerContentContainer = styled.div``

export const BannerPara = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ' #212121';
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const GetButton = styled.button`
  background-color: transparent;
  outline: none;
  font-family: 'Roboto';
  font-weight: 500;
  border: solid 1px #212121;
  color: #212121;
  font-size: 14px;
  padding: 8px;
`

export const CloseButton = styled(GetButton)`
  border: none;
  cursor: pointer;
`

export const HomeContentBottomContainer = styled.div`
  padding: 15px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  outline: none;
  height: 23px;
  padding-left: 10px;
  width: 80%;
  border: solid 1px #909090;
  background-color: transparent;
  color: ${props => (props.colors ? '#313131' : '#ebebeb')};
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const SearchButton = styled.button`
  outline: none;
  height: 23px;
  cursor: pointer;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #909090;
  background-color: ${props => (props.colors ? '#ebebeb' : '#313131')};
`

export const HomeDetailsContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NoSearchImage = styled.img`
  width: 50%;

  @media screen and (min-width: 768px) {
    width: 35%;
  }
`

export const HeadingNoSearch = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.colors};
  text-align: center;
`

export const NoResultPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #94a3b8;
  margin-top: 0px;
  text-align: center;
  max-width: 400px;
`
export const ReTryButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  width: 90px;
  font-weight: 600;
  border-radius: 8px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`
