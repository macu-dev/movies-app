
import React, { useContext } from 'react';
import { CardCtx } from "@/context/Card";


export const CardPretitle = ({ pretitle }: { pretitle?: string }) => {

    const cardContext = useContext( CardCtx );

    return (
        <p>
            { pretitle ? pretitle : cardContext?.item?.pretitle }
        </p>
    );
}