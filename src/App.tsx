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
import About from './pages/About/index.tsx';
import NewsRecord from './pages/NewsRecord/index.tsx';
import { baseSepolia } from 'viem/chains';

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
      path: "about",
      element: <About />,
    },
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
