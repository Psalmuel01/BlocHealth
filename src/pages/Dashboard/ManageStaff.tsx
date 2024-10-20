import StaffTable from "@/components/StaffTable"
import { Button } from "@/components/ui/button"
import { useAccount } from "wagmi"

const ManageStaffs = () => {

    const { isConnected } = useAccount();

    if (!isConnected) {
        return (
            <div className="p-10 px-5 lg:px-20 lg:min-h-screen">
                <div className="flex flex-col justify-center items-center h-[80vh]">
                    <p className="text-3xl max-md:text-xl">Please connect your wallet</p>
                </div>
            </div>
        );
    }

    return (
        <div className='pb-10 min-h-screen'>
            <div className="px-5 lg:px-14 py-8 max-md:py-5 flex max-md:flex-col max-md:gap-4 items-center justify-between">
                <p className='text-2xl font-clash_semibold'>Manage Staff</p>
                <div className="flex gap-2">
                    <Button size='lg' className='bg-[#2924A6]'>Add Staff</Button>
                    <Button size='lg' className='bg-[#2924A6]'>Remove Staff</Button>
                </div>
            </div>
            <div>
                <StaffTable />
            </div>
        </div>
    )
}

export default ManageStaffs