import { StrictMode } from 'react';
import './index.css';

import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Cadastro from './components/Home/Forms/Cadastro.jsx';
import Login from './components/Home/Forms/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cadastro',
    element: (
      <Home>
        <Cadastro />
      </Home>
    ),
  },
  {
    path: '/login',
    element: (
      <Home>
        <Login />
      </Home>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
