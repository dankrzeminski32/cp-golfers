import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page'
import './App.css'
import '@mantine/core/styles.css';
import HeroIntro from './components/HeroIntro/HeroIntro.jsx'
import RegisterForm from './components/RegisterForm/RegisterForm.jsx'

import { MantineProvider } from '@mantine/core';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroIntro/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterForm/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
    <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
