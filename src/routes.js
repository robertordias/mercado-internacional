import { useContext, useState } from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import Layout from './layouts/dashboard';
//
import User from './pages/User';
import Login from './pages/Login';
import Register from './pages/Register';
import { UploadCSVPage } from './pages/Upload';
import ListagemArquivos from './pages/ListaArquivos';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordConfirm from './pages/ForgotPasswordConfirm';
import AuthContext from './sections/auth/auth';
import { ProtectedRoute } from './protectedRoutes';
import { AuthRoute } from './authRoutes';

// ----------------------------------------------------------------------

export default function Router() {
  const context = useContext(AuthContext);

  return useRoutes([
    {
      path: '/',
      element: <ProtectedRoute> <Layout /></ProtectedRoute>,
      children: [
        { path: '/upload', element:  <ProtectedRoute> <UploadCSVPage /> </ProtectedRoute> },
        { path: 'user', element: <ProtectedRoute> <User /> </ProtectedRoute> },
        { path: 'listArchives', element: <ProtectedRoute><ListagemArquivos /> </ProtectedRoute> },
        { path: 'register', element: <ProtectedRoute><Register /></ProtectedRoute> },
      ],
    },
    {
      path: 'login',
      element: <AuthRoute> <Login /> </AuthRoute> ,
    },
    {
      path: 'register',
      element: <AuthRoute> <Register /> </AuthRoute>,
    },
    {
      path: 'forgot-password',
      element: <AuthRoute> <ForgotPassword /> </AuthRoute> ,
    },
    {
      path: 'reset-password',
      element: <AuthRoute> <ForgotPasswordConfirm /> </AuthRoute>,
    }
  ]);
}
