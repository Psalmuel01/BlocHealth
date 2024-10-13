import Header from "@/components/Header";
import PatientCard from "@/components/PatientCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useContractInteractions from "@/pages/Dashboard/useContractInteractions";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const Pending = () => {
    const navigate = useNavigate();
    const { pendingPatients } = useContractInteractions();

    return (
        <div className="pt-10 px-5 lg:px-20 min-h-screen">
            <Header />

            <div className="flex justify-between items-center mt-5">
                <div>
                    <p className="text-2xl font-clash_semibold">Pending Record</p>
                    <p className="font-clash_light">
                        Record of patients yet to be published on the blockchain
                    </p>
                </div>
                <Cross1Icon className="cursor-pointer" onClick={() => navigate(-1)} />
            </div>

            <div className="lg:w-1/2 mt-5">
                <Input
                    type="text"
                    placeholder="Search patient records"
                    className="py-5 rounded-2xl"
                />
            </div>

            {pendingPatients.length > 0 && (
                <div className="mt-5 flex flex-wrap justify-between gap-4 text-sm">
                    {pendingPatients.map((patient, index) => (
                        <PatientCard key={index} patient={patient} index={index} />
                    ))}
                </div>
            )}

            <div className="mt-14 mb-10 flex justify-end">
                <Button size="lg" className="bg-[#2924A6]">
                    Share record
                </Button>
            </div>
        </div>
    );
};

export default Pending;
