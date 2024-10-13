import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDownIcon, Cross1Icon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import useContractInteractions from "../Dashboard/useContractInteractions"

const Appointments = () => {
    const navigate = useNavigate();
    const { appointments } = useContractInteractions();

    return (
        <div className='pt-10 px-5 lg:px-20 pb-0 min-h-screen'>
            <Header />

            <div className='flex justify-between items-center mt-5'>
                <div>
                    <p className='text-2xl font-clash_semibold'>Scheduled Appointments</p>
                    <p className='font-clash_light'>List of appointments you have to attend to</p>
                </div>
                <Cross1Icon className="cursor-pointer" onClick={() => navigate(-1)} />
            </div>

            <div className="mt-8">
                <div className="flex flex-col gap-5">
                    {appointments.map((appointment) => (
                        <Card className="flex max-md:flex-col max-md:gap-2 items-center justify-between p-4 px-6 border-none bg-[#35F3F324]" key={appointment.name}>
                            <div className="flex-1 pr-10 flex max-md:text-center items-center gap-3">
                                <img src="/images/cross.png" alt="" className="w-7" />
                                <p>You have an appointment with <span className="font-clash_medium">{appointment.name}</span></p>
                            </div>
                            <div className="">{new Date(Number(appointment.date) * 1000).toDateString()}</div>
                            <div className="flex-1 text-center">{new Date(Number(appointment.date) * 1000).toLocaleTimeString('en-US', {hour: "2-digit", minute: "2-digit"})}</div>
                            <div className="text-right"><ChevronDownIcon /></div>
                        </Card>
                    ))}
                </div>
            </div>

            <div className='mt-10 mb-10 flex justify-between max-md:flex-col gap-5 max-md:gap-3'>
                <Button size='lg' disabled={true} className='bg-[#2924A6]'>Previous</Button>
                <Button size='lg' className='bg-[#2924A6]'>Next</Button>
            </div>

        </div>
    )
}

export default Appointments