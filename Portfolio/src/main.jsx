import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import Error from './scenes/Error';
import Landing from './scenes/Landing';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Resume from './scenes/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/Skills',
        element: <MySkills />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  
);
