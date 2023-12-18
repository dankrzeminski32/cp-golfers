import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeroIntro from './components/HeroIntro/HeroIntro.jsx'
import RegisterForm from './components/RegisterForm/RegisterForm.jsx'
import LoginForm from './components/LoginForm/LoginForm.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import ErrorPage from './error-page.jsx'

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
  {
    path: "/login",
    element: <LoginForm/>,
  },
  {
    path: "/home",
    element: <Navbar/>,
  },

]);


export function Router() {
  return <RouterProvider router={router} />;
}
