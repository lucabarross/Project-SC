import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./Pages/Login.tsx"
import { Register } from "./Pages/Register.tsx"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register/>
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