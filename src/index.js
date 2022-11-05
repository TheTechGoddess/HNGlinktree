import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './components/Profile';
import Linktree from './components/Linktree';
import App from './App';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Profile />
    <Linktree />
    <Footer />
    </>
  },
  {
    path: "/contact",
    element: <>
    <Contact />
    <Footer />
    </>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


