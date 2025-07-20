import React from 'react'
import Navbar from './Navbar'
import Profiles from './Profiles'
import PostOne from './Post-1'
import PostTwo from './Post-2'

function Home() {
  return (
    <div>
      <Navbar/>
      <Profiles/>
      <PostOne/>
       <PostTwo/>
    </div>
  )
}

export default Home
