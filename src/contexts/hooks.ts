import { CONTRACT_ADDRESS } from "@/utils/constants";
import CONTRACT_ABI from "@/utils/abi";
import { useReadContract } from "wagmi";
import { type UseReadContractParameters } from "wagmi";
import { IAppointment, IEmergencyContact, IHospital, IPatientReturnInfo } from "../utils/interfaces";

export const useReadMainContract = (params: UseReadContractParameters) => {
  const result = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,

    ...params,
  });

  return result;
};

export const useGetAllPatients = () => {
  const { data: allPatientsInfo } = useReadMainContract({
    functionName: "getAllPatients",
    args: ["12345"],
  });

  return allPatientsInfo as IPatientReturnInfo[];
}

export const useGetPatientsAppointments = (_patientAddress: string) => {
  const { data: appointments } = useReadMainContract({
    functionName: "getPatientAppointments",
    args: ["12345", _patientAddress],
  });

  return appointments as IAppointment[];
}

export const useGetPatientRecord = (_patientAddress: string) => {
  const { data: patientInfo } = useReadMainContract({
    functionName: "getPatientRecord",
    args: ["12345", _patientAddress],
  });

  return patientInfo as [IPatientReturnInfo, IEmergencyContact[]];
};

export const useHospital = (_hospitalId: string) => {
  const { data: hospital } = useReadMainContract({
    functionName: "hospitals",
    args: [_hospitalId]
  });

  return hospital as IHospital;
}
