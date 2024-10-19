import { Link } from 'react-router-dom'
import NavButton from './NavButton'
import { WalletConnect } from './Connect'
import { useAccount } from 'wagmi'
import { Button } from './ui/button'

const Header = () => {
    const { isConnected } = useAccount();

    return (
        <div className='flex items-center justify-between'>
            <Link to="/" className='text-xl max-md:hidden'><span className='font-clash_semibold'>Bloc</span>Health</Link>
            <NavButton />
            <div className='hidden lg:flex align-center gap-10'>
                <Link to="/">Home</Link>
                <Link to="/clients">Our Clients</Link>
                <Link to="">How it works</Link>
            </div>
            <div className='flex items-center gap-3'>
                {isConnected && <Button size='lg' className='bg-[#2924A6] hover:bg-blue-800 font-clash_medium'>Dashboard</Button>}
                <WalletConnect />
            </div>
        </div>
    )
}

export default Header