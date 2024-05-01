import {Link} from 'react-router-dom'
import './index.css'

import {
  ListItem,
  VideoImage,
  DetailsContainer,
  ProfileContainer,
  Profile,
  AboutContainer,
  Title,
  ChannelNameViewCountAndPublishedStyling,
  DynamicDataContainer,
} from './styledComponents'

import NxtWatchContext from '../../Context/NxtWatchContext'

const VideoItem = props => {
  const {eachMovieDetails} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link
            to={`/videos/${eachMovieDetails.id}`}
            className="video-link-item"
          >
            <ListItem>
              <VideoImage
                src={eachMovieDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <DetailsContainer>
                <ProfileContainer>
                  <Profile
                    src={eachMovieDetails.profileImageUrl}
                    alt="channel logo"
                  />
                </ProfileContainer>
                <AboutContainer>
                  <Title darkMode={isDarkTheme}>{eachMovieDetails.title}</Title>
                  <ChannelNameViewCountAndPublishedStyling>
                    {eachMovieDetails.channelName}
                  </ChannelNameViewCountAndPublishedStyling>
                  <DynamicDataContainer>
                    <ChannelNameViewCountAndPublishedStyling>
                      {`${eachMovieDetails.viewCount} Views`}
                    </ChannelNameViewCountAndPublishedStyling>
                    <ChannelNameViewCountAndPublishedStyling>
                      {eachMovieDetails.publishedAt}
                    </ChannelNameViewCountAndPublishedStyling>
                  </DynamicDataContainer>
                </AboutContainer>
              </DetailsContainer>
            </ListItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
