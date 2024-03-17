import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Search from './components/Search.jsx';
import Results from './components/Results.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/search"
      },
      {
        path: "/images"
      },
      {
        path: "/videos"
      },
      {
        path: "/news"
      },
  
  ],
  },
], { basename: '/SensibleSearch' });



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
