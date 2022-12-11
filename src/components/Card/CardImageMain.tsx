import React, { useContext } from 'react';
import { CardCtx } from "@/context/Card";

const imageDefault = 'https://picsum.photos/200/300';


export const CardImageMain = ( { img }: { img?: string }) => {

    const cardContext = useContext( CardCtx );
    
     let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( cardContext?.item?.poster_path ) {
        imgToShow = cardContext?.item?.poster_path;
    } else {
        imgToShow = imageDefault;
    }


    return (
        <>  
            {
                imgToShow &&
                <div>
                    <picture>
                        <img src={imgToShow} alt='' />
                    </picture>
                </div>
               
            }
            
        </>
    );
}