import { useReadMainContract } from "./hooks";
import { createContext } from "react";

type TContractInteractions = {
  owner: string;
};

export const ContractInteractionsContext = createContext<TContractInteractions>(
  {
    owner: "0x0000000000000000000000000000000000000000",
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

  return (
    <ContractInteractionsContext.Provider
      value={{
        owner: owner as string,
      }}
    >
      {children}
    </ContractInteractionsContext.Provider>
  );
};
