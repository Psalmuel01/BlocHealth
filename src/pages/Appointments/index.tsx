import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cross1Icon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import useContractInteractions from "../Dashboard/useContractInteractions"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
                {appointments.length === 0 && <p className="text-center">No scheduled appointments</p>}
                <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
                    {appointments.map((appointment, index) => (
                        <Card className="flex max-md:flex-col max-md:gap-2 items-center justify-between p-2 px-6 border-none bg-[#35F3F324]" key={appointment.name}>
                            <AccordionItem className="w-full border-none" value={`item-${index}`}>
                                <AccordionTrigger>
                                    <div className="flex-1 pr-10 flex max-md:text-center items-center gap-3">
                                        <img src="/images/cross.png" alt="" className="w-7" />
                                        <p>You have an appointment with <span className="font-clash_medium">{appointment.name}</span></p>
                                    </div>
                                    <div className="">{new Date(Number(appointment.date) * 1000).toDateString()}</div>
                                    <div className="flex-1 text-center">{new Date(Number(appointment.date) * 1000).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })}</div>

                                </AccordionTrigger>
                                <AccordionContent className="flex gap-2 mt-2">
                                    <span className="font-clash_medium">Reason:</span>{appointment.reason}
                                </AccordionContent>
                            </AccordionItem>
                        </Card>
                    ))}
                </Accordion>
            </div>

            <div className='mt-10 mb-10 flex justify-between max-md:flex-col gap-5 max-md:gap-3'>
                <Button size='lg' disabled={true} className='bg-[#2924A6]'>Previous</Button>
                <Button size='lg' className='bg-[#2924A6]'>Next</Button>
            </div>

        </div>
    )
}

export default Appointments