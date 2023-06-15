import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./screens/Home";
import Article from "./screens/Article";
import Root from "./screens/Root";

function App() {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('ServiceWorker registered with scope:', registration.scope);
      }, (error) => {
        console.log('ServiceWorker registration failed:', error);
      });
    });
  }
  

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