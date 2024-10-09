import './App.css'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home/index.tsx';
import About from './pages/About/index.tsx';
import NewsRecord from './pages/NewsRecord/index.tsx';

const queryClient = new QueryClient()

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
        <RouterProvider router={router} />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
