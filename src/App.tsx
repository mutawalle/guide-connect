import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./features/auth/login";
import Home from "./features/home";

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
