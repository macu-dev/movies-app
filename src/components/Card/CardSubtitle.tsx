

import React, { useContext } from 'react';
import { CardCtx } from "@/context/Card";


export const CardSubtitle = ({ subtitle }: { subtitle?: string }) => {

    const cardContext = useContext( CardCtx );

    return (
        <h3>
            { subtitle ? subtitle : cardContext?.item?.subtitle }
        </h3>
    );
}