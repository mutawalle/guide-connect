import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./features/auth/login";
import Home from "./features/home";
import Post from "./features/postEditor/Post";

export const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Outlet />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "post",
          element: <Post/>
        }
      ],
    },
])

function Root() {
  return (
    <Outlet />
  );
}

export default function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}
