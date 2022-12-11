import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout';
import Home from '@/pages/Home';
import Movie from '@/pages/Movie';
import NotFound from "@/pages/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/movies/:movieId",
                element: <Movie />,
            },
        ]
    },
]);

export default router;