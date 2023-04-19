import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import SeeLaunches from "./components/SeeLaunches";
import SeeCapsules from "./components/SeeCapsules";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <SeeCapsules />
        },
        {
          path: "/launches",
          element: <SeeLaunches />
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />

}

export default App
