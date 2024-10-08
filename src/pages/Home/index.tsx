import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='px-10 py-20 flex flex-col gap-5'>
      <Link to="/">Home</Link>
      <Link to="records">NewsRecord</Link>
      <Link to="about">About</Link>
    </div>
  )
}

export default Home