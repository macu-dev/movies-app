import React, { useContext } from 'react';
import { CardCtx } from "@/context/Card";
import { setPathImage } from '@/helpers/setPathImage';
import { CardImage } from './styled';

const imageDefault = 'https://picsum.photos/200/300';


export const CardImageMain = ( { img }: { img?: string }) => {

    const cardContext = useContext( CardCtx );
    
     let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( cardContext?.item?.poster_path ) {
        imgToShow = setPathImage(cardContext?.item?.poster_path);
    } else {
        imgToShow = imageDefault;
    }

    return (
        <>  
            {
                imgToShow &&
                <CardImage>
                    <picture>
                        <img src={imgToShow} alt='' />
                    </picture>
                </CardImage>
               
            }
            
        </>
    );
}