import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./Pages/Login"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: ""
  },
  {
    path: "/home",
    element: ""
  },
  {
    path: "/aplication",
    element: ""
  },
  {
    path: "/save-project",
    element: ""
  },
  {
    path: "/user-data",
    element: ""
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App