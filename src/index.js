//libs importer

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//components importer

import Header from './jsxComponents/header'
import Footer from './jsxComponents/footer';

//pages importer

import MainPage from './pages/main';
import AboutPage from './pages/about';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <AboutPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={routes} />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
