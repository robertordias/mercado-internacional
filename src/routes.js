import { useState } from 'react'
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

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <UploadCSVPage /> },
        { path: 'user', element: <User /> },
        { path: 'listArchives', element: <ListagemArquivos /> },
        { path: 'register', element: <Register /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: 'reset-password',
      element: <ForgotPasswordConfirm />,
    }
  ]);
}
