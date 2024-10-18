import StaffTable from "@/components/StaffTable"
import { Button } from "@/components/ui/button"

const ManageStaffs = () => {
    return (
        <div className='pt-14 pb-10 min-h-screen'>
            <div className="px-5 lg:px-14 flex items-center justify-between">
                <p className='text-2xl font-clash_semibold'>Manage Staff</p>
                <div className="flex gap-2">
                    <Button size='lg' className='bg-[#2924A6]'>Add Staff</Button>
                    <Button size='lg' className='bg-[#2924A6]'>Remove Staff</Button>
                </div>
            </div>
            <div className="mt-10">
                <StaffTable />
            </div>
        </div>
    )
}

export default ManageStaffs