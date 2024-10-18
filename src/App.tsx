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
import Patients from "./pages/Patients/index.tsx";
import Patient from "./pages/Patients/Patient/index.tsx";
import Appointments from "./pages/Appointments/index.tsx";
import Shared from "./pages/Shared/index.tsx";
import Pending from "./pages/Pending/index.tsx";
import { baseSepolia } from "wagmi/chains";
import Notifications from "./pages/Dashboard/Notifications.tsx";
import { ContractInteractionsProvider } from "./contexts/ContractInteractions";
import Clients from "./pages/Clients/index.tsx";
import Onboard from "./pages/Onboard/index.tsx";
import Dash from "./pages/Dashboard/index.tsx";
import ManageStaffs from "./pages/Dashboard/ManageStaffs.tsx";
// import Header from "@/components/Header";
// import TransactionTemplate from "@/components/TransactionTemplate";

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
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/new-record",
          element: <NewRecord />,
        },
        {
          path: "/dashboard/notifications",
          element: <Notifications />,
        },
        {
          path: "/dashboard/manage-staffs",
          element: <ManageStaffs />,
        }
      ]
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
    // {
    //   path: "example",
    //   element: <Example />,
    // },
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

// const Example = () => {

//   const { data, status } = useQuery({
//     queryKey: ['data'],
//     async queryFn() {
//       return await request(url, query)
//     }
//   })
//   // console.log(data, status);

//   return (
//     <div>
//       <Header />
//       <div className="h-[100vh] grid place-content-center gap-10">
//         <div>
//           {status === 'pending' ? <div>Loading...</div> : null}
//           {status === 'error' ? <div>Error ocurred querying the Subgraph</div> : null}
//           <div>{JSON.stringify(data ?? {})}</div>
//         </div>
//         <TransactionTemplate
//           args={[1n, "Rice", 102033334n, "cancer"] as (string | bigint)[]}
//           functionName="bookAppointment"
//           text="Book Appointment"
//         />
//       </div>
//     </div>
//   );
// };

export default App;
