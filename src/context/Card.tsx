import { createContext } from 'react';

import { CardContextProps, CardProps } from '@/models/card.interface';
import { CardContainer } from '@/components/Card/styled';
import { Link } from 'react-router-dom';


export const CardCtx = createContext<CardContextProps>({item:{}});


export const Card = ({ children, item, id }: CardProps) => {
    return (
        <CardCtx.Provider value={{item}}>
            <CardContainer>
                <Link to={`movies/${id ? id : item?.id}`}>
                    { children }
                </Link>
            </CardContainer>
        </CardCtx.Provider>
    )
};