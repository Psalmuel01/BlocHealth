import { Link } from 'react-router-dom';
import { WalletConnect } from './Connect';
import { BellIcon, DashboardIcon, FileIcon, PersonIcon } from '@radix-ui/react-icons';
import { useAccount } from 'wagmi';
import useContractInteractions from '@/pages/Dashboard/useContractInteractions';
import { useIsHospitalOwner } from '@/contexts/hooks';

const Sidebar = () => {
    const { address } = useAccount();
    const { hospitalID } = useContractInteractions();
    const isHospitalOwner = useIsHospitalOwner(hospitalID, address);

    const navigation = [
        { name: 'Dashboard', to: '', icon: <DashboardIcon /> },
        { name: 'New Record', to: 'new-record', icon: <FileIcon /> },
        isHospitalOwner ? { name: 'Manage Staff', to: 'manage-staff', icon: <PersonIcon /> } : null,
        { name: 'Notifications', to: 'notifications', icon: <BellIcon /> },
    ].filter(Boolean);

    return (
        <div className='bg-[#181662] fixed hidden lg:flex flex-col items-center justify-start p-10 py-20 min-h-screen'>
            <div className="flex flex-col gap-16">
                <Link to="/" className="text-xl pl-5">
                    <span className='font-clash_semibold'>Bloc</span>Health
                </Link>
                <div className='flex flex-col gap-8'>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            className="flex items-center gap-3 rounded-lg py-2 pl-5 text-base leading-7 hover:bg-blue-800"
                        >
                            {item.icon}
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