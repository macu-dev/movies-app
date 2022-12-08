import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router'
import { RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import Layout from './shared/Layout';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


