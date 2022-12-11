import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import router from './router';

import { QueryClient, QueryClientProvider } from 'react-query'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Create a client
const queryClient = new QueryClient()

root.render(
    // Provide the client to your App
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);


