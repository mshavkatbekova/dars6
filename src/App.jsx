import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Contact from './pages/Contact'
import Home from './pages/Home'
import ErrorPages from "./pages/ErrorPages";

function App() {
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPages/>,
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: "about",
          element: <About />,
        },
      ]
    },
   
  ]);
  return <RouterProvider router={roots} />;
}

export default App;

// fgtelVfpmKPYzdqfkKtlwJy7n7AtYvfEP91IW2vsGrA
