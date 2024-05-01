import {
  NotFoundContainer,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundText,
  SorryMsg,
} from './styledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer darkMode={isDarkTheme} data-testid="not-found">
            <SideBar />
            <NotFoundContentContainer>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundText>Page Not Found</NotFoundText>
              <SorryMsg>
                we are sorry, the page you requested could not be found.
              </SorryMsg>
            </NotFoundContentContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
