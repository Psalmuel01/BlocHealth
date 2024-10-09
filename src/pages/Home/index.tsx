import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col justify-between pt-10 px-20 pb-0 h-screen'>
      {/* Header */}
      <div className='flex align-center justify-between'>
        <p className='text-lg'><span className='font-semibold'>Bloc</span>Health</p>
        <div className='flex align-center gap-10'>
          <Link to="/">Home</Link>
          <Link to="records">NewsRecord</Link>
          <Link to="about">About</Link>
        </div>
        <Button size='lg'>Connect Wallet</Button>
      </div>

      {/* Body */}
      <div className='flex flex-col gap-5 items-center justify-center text-center'>
        <p className='text-7xl font-clash_semibold w-3/5'>Patient Records all in one Place.</p>
        <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur. Diam elementum non pellentesque in justo erat in porttitor. Semper quis et mattis tellus.</p>
        <div className='mt-5'>
          <Button size='lg'>Connect Wallet</Button>
        </div>
      </div>

      {/* Footer */}
      <div className='mx-auto'>
        <img src="/images/cuate.png" alt="" />
      </div>
    </div>
  )
}

export default Home