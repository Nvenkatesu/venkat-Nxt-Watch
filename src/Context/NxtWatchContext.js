import React from 'react'

const NxtWatchContext = React.createContext({
  isDartTheam: false,
  toggleTheme: () => {},
  savedVideosList: [],
  saveVideoButtonClicked: () => {},
})

export default NxtWatchContext
