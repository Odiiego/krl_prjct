import { StrictMode } from 'react';
import './index.css';

import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
// import UserSection from './components/UserSection/UserSection.jsx';
import Cadastro from './components/Forms/Cadastro.jsx';
import Login from './components/Forms/Login.jsx';
import CadastrarCliente from './components/Forms/CadastrarCliente.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />,
    // element: <UserSection />,
    element: (
      <Layout>
        <CadastrarCliente />
      </Layout>
    ),
  },
  {
    path: '/cadastro',
    element: (
      <Layout>
        <Cadastro />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
