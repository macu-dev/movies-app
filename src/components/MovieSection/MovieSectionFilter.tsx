import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';

import { MovieSectionCtx } from "@/context/MovieSection";
import useSetActivate from '@/hooks/useSetActivated';
import { Button, FilterContainer } from './styled';


export const MovieSectionFilter = () => {

    const {active, setActive} = useSetActivate(0);

    const MovieSectionContext = useContext( MovieSectionCtx );

    const handleClick = (index: number): void => {
        setActive(index);
    };

    return (
        <FilterContainer>
            {
                MovieSectionContext?.item?.categories?.map((category:string, index: number)=>(
                    <Button className={active === index ? 'active' : ''} key={uuidv4()} onClick={() => {handleClick(index)}}>
                        {category}
                    </Button>
                ))
            }
        </FilterContainer>
    );
}