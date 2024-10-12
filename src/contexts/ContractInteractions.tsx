import { useReadMainContract } from "./hooks";
import { createContext } from "react";

type TContractInteractions = {
  owner: string;
  patientIdCounter: string;
};

export const ContractInteractionsContext = createContext<TContractInteractions>(
  {
    owner: "0x0000000000000000000000000000000000000000",
    patientIdCounter: "",
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
  })

  return (
    <ContractInteractionsContext.Provider
      value={{
        owner: owner as string,
        patientIdCounter: patientIdCounter as string
      }}
    >
      {children}
    </ContractInteractionsContext.Provider>
  );
};
