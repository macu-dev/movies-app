import React, { useContext } from 'react';
import { MovieSectionCtx } from "@/context/MovieSection";


export const MovieSectionTitle = ({ title }: { title?: string }) => {

    const MovieSectionContext = useContext( MovieSectionCtx );

    return (
        <h2>
            { title ? title : MovieSectionContext?.item?.title }
        </h2>
    );
}