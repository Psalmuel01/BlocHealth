import Header from "@/components/Header"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";

interface Patient {
    name: string;
    id: string;
    image: string;
    published: 'Published' | 'Unpublished';
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
        name: "Peace Angel",
        id: "51882C",
        image: "/images/patient2.png",
        published: 'Unpublished',
        shared: 'Shared'
    },
    {
        name: "Joy David",
        id: "51882C",
        image: "/images/patient3.png",
        published: 'Published',
        shared: 'Shared'
    },
    {
        name: "Daniel Matt",
        id: "51882C",
        image: "/images/patient4.png",
        published: 'Published',
        shared: 'Shared'
    },
    {
        name: "Jason Dave",
        id: "51882C",
        image: "/images/patient.png",
        published: 'Unpublished',
        shared: 'Shared'
    },
    {
        name: "Peace Angel",
        id: "51882C",
        image: "/images/patient2.png",
        published: 'Unpublished',
        shared: 'Shared'
    },
    {
        name: "Joy David",
        id: "51882C",
        image: "/images/patient3.png",
        published: 'Published',
        shared: 'Shared'
    },
    {
        name: "Daniel Matt",
        id: "51882C",
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
    {
        name: "Daniel Matt",
        id: "51882C",
        image: "/images/patient4.png",
        published: 'Unpublished',
        shared: 'Shared'
    },
]

const Patients = () => {
    return (
        <div className='pt-10 px-5 lg:px-20 min-h-screen'>
            <Header />

            <div className='flex justify-between mt-5'>
                <div>
                    <p className='text-2xl font-clash_semibold'>New Record</p>
                    <p className='font-clash_light'>Create new patient record</p>
                </div>
                {/* <Cross1Icon /> */}
            </div>

            <div className="lg:w-1/2 mt-5">
                <Input type="text" placeholder="Search patient records" className="py-5 rounded-2xl" />
            </div>

            {PatientInfo && (
                <div className="mt-5 flex flex-wrap justify-between gap-4 text-sm">
                    {PatientInfo.map((patient, index) => (
                        <Card key={index} className="bg-[#35F3F324] p-3 px-5 w-[49%] max-md:w-full">
                            <Link to="/patient" className="flex items-center justify-between">
                                <div className="flex-1 flex items-center gap-3">
                                    <img src={patient.image} alt={patient.name} />
                                    <div>
                                        <p className="font-clash_semibold">{patient.name}</p>
                                        <p>ID: {patient.id}</p>
                                    </div>
                                </div>
                                <p className={`flex-1 font-clash_medium ${patient.published === 'Published' ? 'text-green-500' : 'text-red-500'}`}>{patient.published}</p>
                                <p className="flex-2">{patient.shared}(6)</p>
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

export default Patients