import React from 'react'
import Sidebar from '../MainFrame/sidebar'
import MainContent from './MainContent'
import SearchIcon from '@mui/icons-material/Search';

function SearchByTags() {
  return (
    <div className="main-index">
         <div className="main-index-content">
         <Sidebar />
         
         <MainContent />
      </div>
      </div>
  )
}

export default SearchByTags