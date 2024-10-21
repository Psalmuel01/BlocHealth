import "./App.css";
import { Toaster } from "react-hot-toast";
import "@coinbase/onchainkit/styles.css";
import { Buffer } from "buffer";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
// import { gql, request } from 'graphql-request';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import NewRecord from "./pages/Dashboard/NewRecord.tsx";
import Patients from "./pages/Dashboard/components/Patients.tsx";
import Patient from "./pages/Dashboard/components/Patient.tsx";
import Appointments from "./pages/Dashboard/components/Appointments.tsx";
import Shared from "./pages/Dashboard/components/Shared.tsx";
import Pending from "./pages/Dashboard/components/Pending.tsx";
import { baseSepolia } from "wagmi/chains";
import Notifications from "./pages/Dashboard/Notifications.tsx";
import { ContractInteractionsProvider } from "./contexts/ContractInteractions";
import Clients from "./pages/Clients/index.tsx";
import Onboard from "./pages/Onboard/index.tsx";
import Dash from "./pages/Dashboard/index.tsx";
import ManageStaff from "./pages/Dashboard/ManageStaff.tsx";
import TransactionTemplate from "@/components/TransactionTemplate";

globalThis.Buffer = Buffer;

// const query = gql`{
//     patientAddeds(first: 5) {
//       fullName
//       id
//       isPublished
//       patientId
//     }
//     appointmentBookeds(first: 5) {
//       appointmentId
//       id
//       name
//       patientId
//     }
// }`
// const url = 'https://api.studio.thegraph.com/query/91688/blochealth/version/latest'

const queryClient = new QueryClient();

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/clients",
      element: <Clients />,
    },
    {
      path: "onboard",
      element: <Onboard />,
    },
    {
      path: "dashboard",
      element: <Dash />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "new-record",
          element: <NewRecord />,
        },
        {
          path: "notifications",
          element: <Notifications />,
        },
        {
          path: "manage-staff",
          element: <ManageStaff />,
        },
        {
          path: "patients",
          element: <Patients />,
        },
        {
          path: ":type/:id",
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
          path: "example",
          element: <Example />,
        },
      ],
    },
    {
      path: "*",
      element: <NoMatch />,
    }
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

function NoMatch() {
  return (
    <div className="grid place-content-center h-screen max-md:text-xl text-3xl">
      <h2>404: Page Not Found</h2>
      <p>Uh oh! Wrong page 😞</p>
    </div>
  );
}

const Example = () => {

  // const { data, status } = useQuery({
  //   queryKey: ['data'],
  //   async queryFn() {
  //     return await request(url, query)
  //   }
  // })
  // console.log(data, status);

  return (
    <div>
      <div className="h-[100vh] grid place-content-center gap-10">
        {/* <div>
          {status === 'pending' ? <div>Loading...</div> : null}
          {status === 'error' ? <div>Error ocurred querying the Subgraph</div> : null}
          <div>{JSON.stringify(data ?? {})}</div>
        </div> */}
        <TransactionTemplate
          args={["12345", "Lagos University Teaching Hospital", "Lagos", 78796800n, 456n] as (string | bigint)[]}
          functionName="addHospital"
          text="Add Hospital"
        />
      </div>
    </div>
  );
};

export default App;
