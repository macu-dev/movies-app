
import React, { ReactElement, useContext } from 'react';
import { CardCtx } from "@/context/Card";


export const CardFooter = ({ description, children }: { description?: string, children?: ReactElement | ReactElement [] }) => {

    const cardContext = useContext( CardCtx );

    return (

        <div>
            <p>
                { description ? description : cardContext?.item?.description }
            </p>

            {children}
        </div>
    );
}