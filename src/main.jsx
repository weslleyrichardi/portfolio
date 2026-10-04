import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './App'
import PreviewPage from './PreviewPage'
import Layout from './Layout'

const ROUTERS = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "preview",
        element: <PreviewPage/>
      },
      {
        path: "*",
        element: <Navigate to="/" replace/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ROUTERS} /> 
  </StrictMode>
)

