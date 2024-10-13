import "./App.css";
import { Toaster } from "react-hot-toast";
import "@coinbase/onchainkit/styles.css";
import { Buffer } from "buffer";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Dashboard from "./pages/Dashboard/index.tsx";
import NewsRecord from "./pages/NewsRecord/index.tsx";

import Patients from "./pages/Patients/index.tsx";
import Patient from "./pages/Patients/Patient/index.tsx";
import Appointments from "./pages/Appointments/index.tsx";
import Shared from "./pages/Shared/index.tsx";
import Pending from "./pages/Pending/index.tsx";
import { baseSepolia } from "wagmi/chains";
import Notifications from "./pages/Notifications/index.tsx";
import { ContractInteractionsProvider } from "./contexts/ContractInteractions";
import { TransactionDefault } from "@coinbase/onchainkit/transaction";
import { CONTRACT_ADDRESS } from "@/utils/constants";
import Header from "@/components/Header";
import CONTRACT_ABI from "@/utils/abi";
import TransactionTemplate from "@/components/TransactionTemplate";

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "records",
      element: <NewsRecord />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "patients",
      element: <Patients />,
    },
    {
      path: "patients/:id",
      element: <Patient />,
    },
    {
      path: "appointments",
      element: <Appointments />,
    },
    {
      path: "shared",
      element: <Shared />,
    },
    {
      path: "pending",
      element: <Pending />,
    },
    {
      path: "notifications",
      element: <Notifications />,
    },
    // {
    //   path: "example",
    //   element: <Example />,
    // },
  ]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={import.meta.env.VITE_ONCHAINKIT_API_KEY}
          chain={baseSepolia}
        >
          <ContractInteractionsProvider>
            <RouterProvider router={router} />
            <Toaster />
          </ContractInteractionsProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

const Example = () => {
  return (
    <div>
      <Header />
      <div className="h-[100vh] grid place-content-center">
        <TransactionTemplate
          args={[1n, "James", 102033334n, "fever"] as (string | bigint)[]}
          functionName="bookAppointment"
          text="Book Appointment"
        />
      </div>
    </div>
  );
};

export default App;
