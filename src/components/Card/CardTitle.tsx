

import React, { useContext } from 'react';
import { CardCtx } from "@/context/Card";


export const CardTitle = ({ title }: { title?: string }) => {

    const cardContext = useContext( CardCtx );
    const Ctxtitle = cardContext?.item?.title || cardContext?.item?.name
    return (
        <>
            <h2>
                { title ? title : Ctxtitle }
            </h2>        
        </>
    );
}