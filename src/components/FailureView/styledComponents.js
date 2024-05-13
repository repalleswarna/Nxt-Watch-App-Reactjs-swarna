import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImage = styled.img`
  width: 50%;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.colors};
  text-align: center;
`

export const FailurePara = styled.p`
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
