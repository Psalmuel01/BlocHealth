import { IPatient } from "../utils/interfaces";
import { useReadMainContract } from "./hooks";
import { createContext, useMemo } from "react";

type TContractInteractions = {
  owner: string;
  totalPatients: number;
  totalAppointments: number;
  patientsInfo: IPatient[];
  publishedPatients: IPatient[];
  pendingPatients: IPatient[];
};

export const ContractInteractionsContext = createContext<TContractInteractions>(
  {
    owner: "0x0000000000000000000000000000000000000000",
    totalPatients: 0,
    totalAppointments: 0,
    patientsInfo: [] as IPatient[],
    publishedPatients: [] as IPatient[],
    pendingPatients: [] as IPatient[],
  }
);

export const ContractInteractionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: owner } = useReadMainContract({
    functionName: "admin",
    // args: [],
  });

  const { data: patientIdCounter } = useReadMainContract({
    functionName: "patientIdCounter",
    // args: [1],
  });

  const { data: appointmentIdCounter } = useReadMainContract({
    functionName: "appointmentIdCounter",
    // args: [1],
  });

  const { data: patientsInfo } = useReadMainContract({
    functionName: "getAllPatients",
    args: [],
  });

  const publishedPatients = useMemo(() => {
    if (!patientsInfo) return [];
    return (patientsInfo as IPatient[]).filter(
      (patient) => patient.isPublished
    );
  }, [patientsInfo]);

  const pendingPatients = useMemo(() => {
    if (!patientsInfo) return [];
    return (patientsInfo as IPatient[]).filter(
      (patient) => !patient.isPublished
    );
  }, [patientsInfo]);

  return (
    <ContractInteractionsContext.Provider
      value={{
        owner: owner as string,
        totalPatients: Number(patientIdCounter) - 1,
        totalAppointments: Number(appointmentIdCounter) - 1,
        patientsInfo: patientsInfo as IPatient[],
        publishedPatients,
        pendingPatients,
      }}
    >
      {children}
    </ContractInteractionsContext.Provider>
  );
};
