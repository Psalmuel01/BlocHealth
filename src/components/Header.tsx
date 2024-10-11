import { Link } from 'react-router-dom'
// import { Button } from '@/components/ui/button'
import NavButton from './NavButton'
import { WalletConnect } from './Connect'
import { BellIcon } from '@radix-ui/react-icons'
import { useAccount } from 'wagmi'
import { toast } from 'react-hot-toast'

const Header = () => {
    const { isConnected } = useAccount();
    return (
        <div className='flex align-center justify-between'>
            <Link to="/" className='text-xl max-md:hidden'><span className='font-clash_semibold'>Bloc</span>Health</Link>
            <NavButton />
            <div className='hidden lg:flex align-center gap-10'>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/records">New Record</Link>
                <Link onClick={() => toast("Coming soon")} to="">About</Link>
            </div>
            {/* <Button size='lg' className='bg-[#2924A6]'>Connect Wallet</Button> */}
            <div className='flex items-center gap-3'>
                {isConnected && <Link to="/notifications"><BellIcon width="20" height="20" /></Link>}
                <WalletConnect />
            </div>
        </div>
    )
}

export default Header