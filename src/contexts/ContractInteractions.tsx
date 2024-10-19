import { useReadMainContract } from "./hooks";
import { createContext } from "react";

type TContractInteractions = {
  owner: string;
  hospitalCount: number;
  // totalAppointments: number;
  // publishedPatients: IPatient[];
  // pendingPatients: IPatient[];
};

export const ContractInteractionsContext = createContext<TContractInteractions>(
  {
    owner: "0x0000000000000000000000000000000000000000",
    hospitalCount: 0,
    // totalAppointments: 0,
    // publishedPatients: [] as IPatient[],
    // pendingPatients: [] as IPatient[],
  }
);

export const ContractInteractionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: owner } = useReadMainContract({
    functionName: "owner",
    // args: [],
  });

  const { data: hospitalCount } = useReadMainContract({
    functionName: "hospitalCount",
    // args: [1],
  });

  // const publishedPatients = useMemo(() => {
  //   if (!allPatientsInfo) return [];
  //   return (allPatientsInfo as IPatient[]).filter(
  //     (patient) => patient.isPublished
  //   );
  // }, [allPatientsInfo]);

  // const pendingPatients = useMemo(() => {
  //   if (!allPatientsInfo) return [];
  //   return (allPatientsInfo as IPatient[]).filter(
  //     (patient) => !patient.isPublished
  //   );
  // }, [allPatientsInfo]);

  return (
    <ContractInteractionsContext.Provider
      value={{
        owner: owner as string,
        hospitalCount: Number(hospitalCount),
        // totalAppointments: appointmentIdCounter,
        // publishedPatients,
        // pendingPatients,
      }}
    >
      {children}
    </ContractInteractionsContext.Provider>
  );
};
