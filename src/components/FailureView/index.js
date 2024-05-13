import ObjectContext from '../../context/objectContext'

import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  ReTryButton,
} from './styledComponents'

const FailureView = props => {
  const {retry} = props

  const onRetry = () => {
    retry()
  }

  return (
    <ObjectContext.Consumer>
      {value => {
        const {theme} = value
        const textColor = theme ? '#181818' : '#f9f9f9'
        const image = theme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={image} alt="failure view" />
            <FailureHeading colors={textColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <ReTryButton onClick={onRetry} type="button">
              Retry
            </ReTryButton>
          </FailureContainer>
        )
      }}
    </ObjectContext.Consumer>
  )
}

export default FailureView
