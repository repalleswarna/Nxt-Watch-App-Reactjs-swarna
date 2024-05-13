import React from 'react'

const ObjectContext = React.createContext({
  theme: true,
  changeThem: () => {},
  activeTabId: '',
  changeTabId: () => {},
  saveList: [],
  addSaveList: () => {},
  removeSaveList: () => {},
})

export default ObjectContext
