import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home/index.tsx';
import About from './pages/About/index.tsx';
import NewsRecord from './pages/NewsRecord/index.tsx';

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
    <RouterProvider router={router} />
  )
}

export default App
