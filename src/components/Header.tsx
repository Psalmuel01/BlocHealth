import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Header = () => {
    return (
        <div className='flex align-center justify-between'>
            <p className='text-xl'><span className='font-clash_semibold'>Bloc</span>Health</p>
            <div className='flex align-center gap-10'>
                <Link to="/">Home</Link>
                <Link to="/records">NewsRecord</Link>
                <Link to="/about">About</Link>
            </div>
            <Button size='lg' className='bg-[#2924A6]'>Connect Wallet</Button>
        </div>
    )
}

export default Header