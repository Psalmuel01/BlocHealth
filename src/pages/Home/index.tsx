import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex align-center justify-between'>
      <p className='text-lg'><span className='font-semibold'>Bloc</span>Health</p>
      <div className='flex align-center gap-4'>
        <Link to="/">Home</Link>
        <Link to="records">NewsRecord</Link>
        <Link to="about">About</Link>
      </div>
      <Button>Connect Wallet</Button>
    </div>
  )
}

export default Home