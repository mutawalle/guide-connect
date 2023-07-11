import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom"
import Login from "./features/auth/Login"
import Home from "./features/home"
import Guide from "./features/guide/components/Guide"
import GuideCreatorPage from "./features/guide/components/GuideCreatorPage"

export const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Outlet />,
      children: [
        {
          path: "login",
          element: <Login/>,
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
          path: "guide",
          element: <Guide/>
        },
        {
          path: "create-guide",
          element: <GuideCreatorPage/>
        }
      ],
    },
])

function Root() {
  const location = useLocation()

  console.log("suhfiuse")

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
