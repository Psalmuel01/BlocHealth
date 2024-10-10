import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'NewsRecord', to: '/records' },
    { name: 'About', to: '/about' },
];

const NavButton = () => {
    return (
        <div className='lg:hidden'>
            <Dialog>
                <DialogTrigger>
                    <button
                        type="button"
                        className="rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6" aria-hidden="true" />
                    </button>
                </DialogTrigger>
                {/* <div className="fixed inset-0 z-50" /> */}
                <DialogContent className="text-[#070B12] fixed h-full left-32 z-50 w-2/3 bg-white px-6 py-6">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="text-xl">
                            <span className='font-clash_semibold'>Bloc</span>Health
                        </Link>
                    </div>
                    {/* <div className="flow-root"> */}
                        <div>
                            <div className="py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link to="/about"><Button size='lg' className='bg-[#2924A6]'>Connect Wallet</Button></Link>
                            </div>
                        </div>
                    {/* </div> */}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default NavButton;