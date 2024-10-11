import Header from "@/components/Header"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Cross1Icon } from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";

interface Patient {
    name: string;
    id: string;
    image: string;
    published: 'Published';
    shared: string;
}


const PatientInfo: Patient[] = [
    {
        name: "Jason Dave",
        id: "51882C",
        image: "/images/patient.png",
        published: 'Published',
        shared: 'Shared'
    },
    {
        name: "Joy David",
        id: "51882E",
        image: "/images/patient3.png",
        published: 'Published',
        shared: 'Shared'
    },
    {
        name: "Daniel Matt",
        id: "51882F",
        image: "/images/patient4.png",
        published: 'Published',
        shared: 'Shared'
    },
    {
        name: "Joy David",
        id: "51882E",
        image: "/images/patient3.png",
        published: 'Published',
        shared: 'Shared'
    },
    {
        name: "Daniel Matt",
        id: "51882F",
        image: "/images/patient4.png",
        published: 'Published',
        shared: 'Shared'
    },
    {
        name: "Jason Dave",
        id: "51882C",
        image: "/images/patient.png",
        published: 'Published',
        shared: 'Shared'
    },
]

const Shared = () => {
    const navigate = useNavigate();

    return (
        <div className='pt-10 px-5 lg:px-20 min-h-screen'>
            <Header />

            <div className='flex justify-between items-center mt-5'>
                <div>
                    <p className='text-2xl font-clash_semibold'>Shared Records</p>
                    <p className='font-clash_light'>Shared record of your patients</p>
                </div>
                <Cross1Icon className="cursor-pointer" onClick={() => navigate(-1)} />
            </div>

            <div className="lg:w-1/2 mt-5">
                <Input type="text" placeholder="Search patient records" className="py-5 rounded-2xl" />
            </div>

            {PatientInfo && (
                <div className="mt-5 flex flex-wrap justify-between gap-4 text-sm">
                    {PatientInfo.map((patient, index) => (
                        <Card key={index} className="bg-[#35F3F324] p-3 px-5 w-[49%] max-md:w-full">
                            <Link to={`/patients/${patient.id}`} className="flex items-center justify-between">
                                <div className="lg:flex-1 flex items-center gap-3">
                                    <img src={patient.image} alt={patient.name} />
                                    <div>
                                        <p className="font-clash_semibold">{patient.name}</p>
                                        <p>ID: {patient.id}</p>
                                    </div>
                                </div>
                                <p className='lg:flex-1 font-clash_medium text-green-500'>{patient.published}</p>
                                <p className="lg:flex-2">{patient.shared}(6)</p>
                            </Link>
                        </Card>
                    ))}
                </div>
            )}

            <div className='mt-14 mb-10 flex justify-end'>
                <Button size='lg' className='bg-[#2924A6]'>Share record</Button>
            </div>

        </div >
    )
}

export default Shared