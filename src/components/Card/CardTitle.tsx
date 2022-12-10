

import React, { useContext } from 'react';
import { CardCtx } from "@/context/Card";


export const CardTitle = ({ title }: { title?: string }) => {

    const cardContext = useContext( CardCtx );

    return (
        <>
            <h2>
                { title ? title : cardContext?.item?.title }
            </h2>        
        </>
    );
}