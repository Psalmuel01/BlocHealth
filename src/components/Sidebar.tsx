import { Link } from 'react-router-dom';
import { WalletConnect } from './Connect';
import { DashboardIcon } from '@radix-ui/react-icons';

const navigation = [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'New Record', to: '/dashboard/new-record' },
    { name: 'Manage Staffs', to: '/dashboard/manage-staffs' },
    { name: 'Notifications', to: '/dashboard/notifications' },
];

const Sidebar = () => {
    return (
        <div className='bg-[#181662] fixed max-md:hidden flex flex-col items-center justify-start p-10 py-20 min-h-screen'>
            <div className="flex flex-col gap-16">
                <Link to="/" className="text-xl px-2">
                    <span className='font-clash_semibold'>Bloc</span>Health
                </Link>
                <div className='flex flex-col gap-8'>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            className="flex items-center gap-3 rounded-lg p-2 text-base leading-7 hover:bg-blue-800"
                        >
                            <DashboardIcon />
                            {item.name}
                        </Link>
                    ))}
                    <div className="py-6 mt-20">
                        <WalletConnect />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;