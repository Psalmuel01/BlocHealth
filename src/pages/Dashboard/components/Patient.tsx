import { Button } from "@/components/ui/button";
import {
    useGetPatientRecord,
} from "@/contexts/hooks";
import { IEmergencyContact, IPatientReturnInfo } from "@/utils/interfaces";
import { Cross1Icon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { useNavigate, useParams } from "react-router-dom";

const Patient = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const patientInfo = useGetPatientRecord("0xB2AF542dA937A6aC46228eBA63f21A7EFc40C70E");

    if (!patientInfo || !Array.isArray(patientInfo)) {
        console.error("patientInfo is undefined or not an array");
        return (
            <div className="grid place-content-center min-h-[calc(100vh-2rem)]">
                Loading...
            </div>
        );
    }

    const [patientDetails, emergencyContacts] = patientInfo as [IPatientReturnInfo, IEmergencyContact[]];
    // const patientDetails = patientInfo[0];
    // const emergencyContacts = patientInfo.length > 1 && patientInfo[1];

    if (!patientDetails) {
        console.error("patientDetails is undefined");
        return (
            <div className="grid place-content-center min-h-[calc(100vh-2rem)]">
                No patient details found.
            </div>
        );
    }

    if (Array.isArray(patientDetails)) {
        console.error("patientDetails is an array of emergency contacts");
        return (
            <div className="grid place-content-center min-h-[calc(100vh-2rem)]">
                No emergency contacts found.
            </div>
        );
    }

    const { name, DOB, medicalInfo = { allergies: "", currentMedications: "", medicalHistoryFile: "" },
        contactInfo = { email: "", healthInsured: false, nextOfKin: "", nextOfKinPhoneNumber: 0, nextOfKinResidentialAddress: "", phone: 0, residentialAddress: "" }
    } = patientDetails as IPatientReturnInfo;

    return (
        <div className="pt-10 px-5 lg:px-20 min-h-screen overflow-x-hidden">
            <div className="mt-5 flex items-center justify-between">
                <div className="lg:flex-1 flex items-center gap-3">
                    <img
                        src={`/images/patient${(Number(id + 1) % 4 === 0 ? 4 : Number(id + 1) % 4)}.png`}
                        alt={name}
                    />
                    <div>
                        <p className="font-clash_semibold">{name}</p>
                        <p>ID: {Number(id) + 1}</p>
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
                        <p>{DOB ? new Date(Number(DOB) * 1000).toDateString() : 'N/A'}</p>
                    </div>
                    {/* <div className="lg:ml-[13%]">
                        <p className="font-clash_medium">Diagnosis:</p>
                        <p>{medicalInfo.diagnosis || 'N/A'}</p>
                    </div> */}
                </div>
                <div className="flex flex-wrap gap-20 max-md:gap-10">
                    <div className="lg:w-[20%]">
                        <p className="font-clash_medium">Date of last visit:</p>
                        <p>08/10/2024</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Current medications:</p>
                        <p>{medicalInfo.currentMedications || 'N/A'}</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Allergies:</p>
                        <p>{medicalInfo.allergies || 'None'}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-20 max-md:gap-10">
                    <div className="lg:w-[20%]">
                        <p className="font-clash_medium">Next of kin:</p>
                        <p>{contactInfo.nextOfKin || 'N/A'}</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Next of Kin Phone:</p>
                        <p>+234 {contactInfo.nextOfKinPhoneNumber || 'N/A'}</p>
                    </div>
                    <div className="">
                        <p className="font-clash_medium">Next of Kin Address:</p>
                        <p>{contactInfo.nextOfKinResidentialAddress || 'N/A'}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-20 max-md:gap-10">
                    <p className="font-clash_medium">Emergency Contacts:</p>
                    <div className="lg:w-[20%]">
                        {emergencyContacts.length > 0 ? (
                            emergencyContacts.map((contact, index) => (
                                <div key={index} className="flex justify-between">
                                    <p>Name: {contact.name}</p>
                                    <p>Phone: {contact.phone}</p>
                                    <p>Address: {contact.residentialAddress}</p>
                                </div>
                            ))
                        ) : (
                            <p>No emergency contacts listed.</p>
                        )}
                    </div>
                </div>

                <div className="mt-14 mb-10 flex max-md:flex-col gap-5 max-md:gap-3">
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
        </div>
    );
};

export default Patient;
