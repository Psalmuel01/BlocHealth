import { CONTRACT_ADDRESS } from "@/utils/constants";
import CONTRACT_ABI from "@/utils/abi";
import { useReadContract } from "wagmi";
import { type UseReadContractParameters } from "wagmi";
import { IPatient } from "../utils/interfaces";

export const useReadMainContract = (params: UseReadContractParameters) => {
  const result = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,

    ...params,
  });

  return result;
};

export const useGetPatientById = (patientId: number) => {
  const { data: patientAddress } = useReadMainContract({
    functionName: "getPatientByID",
    args: [patientId],
  });

  return patientAddress as string;
};

export const useGetPatientInfoByAddress = (_patientAddress: string) => {
  const { data: patientInfo } = useReadMainContract({
    functionName: "getPatientInfoByAddress",
    args: [_patientAddress],
  });

  return patientInfo as IPatient;
};
