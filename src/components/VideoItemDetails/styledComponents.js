import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.colors};
`

export const VideoItemDetailsContent = styled.div`
  display: flex;
`

export const SideBarContainer = styled.div`
  display: none;
  width: 200px;
  height: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  height: 90vh;
  background-color: ${props => (props.themes ? '#f9f9f9' : '#212121')};
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
`

export const ViewsAndLikesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ParaDetail = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: ${props => props.colors};
  margin-bottom: 0px;
`

export const ViewsDetails = styled.div`
  display: flex;
`
export const ParaView = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-right: 15px;
  color: #64748b;
`

export const LikeDisLikeSaveContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LDSContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.colors};
`

export const HrLine = styled.hr`
  width: 100%;
  margin-top: 20px;
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ImageProfile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NameContainer = styled.div``

export const Name = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
  color: ${props => props.colors};
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #64748b;

  @media screen and (min-width: 768px) {
    margin-left: 45px;
  }
`
