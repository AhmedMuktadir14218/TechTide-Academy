import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import { router } from './Router/Router/Routes.jsx';
import AuthProvider from './Context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
    <div >
      
      <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)
