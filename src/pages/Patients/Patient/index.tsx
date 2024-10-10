import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Cross1Icon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Link, useParams } from "react-router-dom";

const patient = {
    name: 'Jason Dave',
    id: '1234',
    image: '/images/patient.png',
}

const Patient = () => {
    const { id } = useParams();
    console.log(id)

    return (
        <div className="pt-10 px-5 lg:px-20 min-h-screen overflow-x-hidden">
            <Header />

            <div className="mt-5 flex items-center justify-between">
                <div className="lg:flex-1 flex items-center gap-3">
                    <img src={patient.image} alt={patient.name} />
                    <div>
                        <p className="font-clash_semibold">{patient.name}</p>
                        <p>ID: {id}</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <OpenInNewWindowIcon />
                    <Link to="/patients"><Cross1Icon /></Link>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-14 max-md:gap-10">
                <div className="flex max-md:flex-col gap-20 max-md:gap-10">
                    <div className="">
                        <p className="font-clash_medium">Date of birth:</p>
                        <p>10/12/1990</p>
                    </div>
                    <div className="lg:ml-[13%]">
                        <p className="font-clash_medium">Diagnosis:</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Diam elementum non pellentesque in justo erat in porttitor. Semper quis et mattis tellus. Sed consequat semper montes arcu. Nec scelerisque nulla amet a in erat tortor.</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-20 max-md:gap-10">
                    <div className="lg:w-[20%]">
                        <p className="font-clash_medium">Date of last visit:</p>
                        <p>08/10/2024</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Current medications:</p>
                        <p className="">Semper quis et mattis tellus.</p>
                        <p>Semper quis et mattis tellus.</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Allergies:</p>
                        <p>Semper, quis, et, mattis, tellus.</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-20 max-md:gap-10">
                    <div className="lg:w-[20%]">
                        <p className="font-clash_medium">Next of kin:</p>
                        <p>Daniel Dave</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Relationship:</p>
                        <p>Brother</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Phone number:</p>
                        <p>08134567809</p>
                    </div>
                </div>
            </div>

                <div className=' mt-14 mb-10 flex max-md:flex-col gap-5 max-md:gap-3'>
                    <Button variant="outline" size='lg' className="bg-transparent border-[#2924A6]">Close</Button>
                    <Button size='lg' className='bg-[#2924A6]'>Share record</Button>
                </div>

        </div>
    );
}

export default Patient;