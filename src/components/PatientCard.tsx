import { Card } from "@/components/ui/card";
import { IPatient } from "../utils/interfaces";
import { Link } from "react-router-dom";

const PatientCard = ({
  patient,
  index,
}: {
  patient: IPatient;
  index: number;
}) => (
  <Card className="bg-[#35F3F324] p-3 px-5 w-[49%] max-md:w-full">
    <Link
      to={`/patients/${patient.id}`}
      className="flex items-center justify-between"
    >
      <div className="lg:flex-1 flex items-center gap-3">
        <img
          src={`/images/patient${((index + 1) % 4 === 0 ? 4 : (index + 1) % 4)}.png`}
          alt={patient.fullName}
        />
        <div>
          <p className="font-clash_semibold">{patient.fullName}</p>
          <p>ID: {Number(patient.id)}</p>
        </div>
      </div>
      <p
        className={`lg:flex-1 font-clash_medium ${patient.isPublished ? "text-green-500" : "text-red-500"
          }`}
      >
        {patient.isPublished ? "Published" : "Unpublished"}
      </p>
      {/* <p className="lg:flex-2">{patient.shared}(6)</p> */}
    </Link>
  </Card>
);

export default PatientCard;
