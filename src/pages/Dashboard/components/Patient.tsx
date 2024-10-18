import { Button } from "@/components/ui/button";
import {
    useGetPatientById,
    useGetPatientInfoByAddress,
} from "@/contexts/hooks";
import { Cross1Icon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { useNavigate, useParams } from "react-router-dom";

const Patient = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const patientAddress = useGetPatientById(id ? Number(id) : 0);
    const patientInfo = useGetPatientInfoByAddress(patientAddress);

    console.log({ patientInfo });

    if (!patientInfo)
        return (
            <div className="grid place-content-center min-h-[calc(100vh-2rem)]">
                Loading
            </div>
        );
    return (
        <div className="pt-10 px-5 lg:px-20 min-h-screen overflow-x-hidden">
            <div className="mt-5 flex items-center justify-between">
                <div className="lg:flex-1 flex items-center gap-3">
                    <img
                        src={`/images/patient${(Number(patientInfo.id) % 4 === 0 ? 4 : Number(patientInfo.id) % 4)}.png`}
                        alt={patientInfo.fullName}
                    />
                    <div>
                        <p className="font-clash_semibold">{patientInfo.fullName}</p>
                        <p>ID: {id}</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <OpenInNewWindowIcon />
                    <Cross1Icon className="cursor-pointer" onClick={() => navigate(-1)} />
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-14 max-md:gap-10">
                <div className="flex max-md:flex-col gap-20 max-md:gap-10">
                    <div className="">
                        <p className="font-clash_medium">Date of birth:</p>
                        <p>
                            {new Date(Number(patientInfo.dateOfBirth) * 1000).toDateString()}
                        </p>
                    </div>
                    <div className="lg:ml-[13%]">
                        <p className="font-clash_medium">Diagnosis:</p>
                        <p>{patientInfo.medicalInfo.diagnosis}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-20 max-md:gap-10">
                    <div className="lg:w-[20%]">
                        <p className="font-clash_medium">Date of last visit:</p>
                        <p>08/10/2024</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Current medications:</p>
                        <p className="">{patientInfo.medicalInfo.currentMedications}</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Allergies:</p>
                        <p>
                            {patientInfo.medicalInfo.allergies
                                ? patientInfo.medicalInfo.allergies
                                : "None"}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-20 max-md:gap-10">
                    <div className="lg:w-[20%]">
                        <p className="font-clash_medium">Next of kin:</p>
                        <p>{patientInfo.contactInfo.nextOfKin}</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Next of Kin Phone:</p>
                        <p>+234 {patientInfo.contactInfo.nextOfKinPhoneNumber}</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Next of Kin Address:</p>
                        <p>{patientInfo.contactInfo.nextOfKinResidentialAddress}</p>
                    </div>
                </div>
            </div>

            <div className=" mt-14 mb-10 flex max-md:flex-col gap-5 max-md:gap-3">
                <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-[#2924A6]"
                    onClick={() => navigate(-1)}
                >
                    Close
                </Button>
                <Button size="lg" className="bg-[#2924A6]">
                    Share record
                </Button>
            </div>
        </div>
    );
};

export default Patient;
