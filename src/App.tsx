import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom"
import Login from "./features/auth/Login"
import Register from "./features/auth/Register"
import Home from "./features/home"
import Post from "./features/post/Post"

export const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Outlet />,
      children: [
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "register",
          element: <Register/>,
        }
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
  const location = useLocation()

  if(location.pathname === "/"){
    return <Navigate to="/home"/>
  }

  return (
    <Outlet />
  );
}

export default function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}
