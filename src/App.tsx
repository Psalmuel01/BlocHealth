import './App.css'
import '@coinbase/onchainkit/styles.css';
import { Buffer } from 'buffer'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OnchainKitProvider } from '@coinbase/onchainkit';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home/index.tsx';
import Dashboard from './pages/Dashboard/index.tsx';
import NewsRecord from './pages/NewsRecord/index.tsx';

import Patients from './pages/Patients/index.tsx';
import Patient from './pages/Patients/Patient/index.tsx';
import Appointments from './pages/Appointments/index.tsx';
import Shared from './pages/Shared/index.tsx';
import Pending from './pages/Pending/index.tsx';
import { baseSepolia } from 'wagmi/chains';
import Notifications from './pages/Notifications/index.tsx';

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
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
      element: <Appointments />
    },
    {
      path: "shared",
      element: <Shared />
    },
    {
      path: "pending",
      element: <Pending />
    },
    {
      path: "notifications",
      element: <Notifications />
    }
  ]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider apiKey={import.meta.env.VITE_ONCHAINKIT_API_KEY} chain={baseSepolia}>
          <RouterProvider router={router} />
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
