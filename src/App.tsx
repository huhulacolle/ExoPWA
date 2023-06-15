import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./screens/Home";
import Article from "./screens/Article";
import Root from "./screens/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "article/:id",
          element: <Article />
        }
      ]
    },

  ]);

  return <RouterProvider router={router} />
}

export default App