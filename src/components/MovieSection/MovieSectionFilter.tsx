import { v4 as uuidv4 } from 'uuid';
import React, { SetStateAction, useContext } from 'react';

import { MovieSectionCtx } from "@/context/MovieSection";
import { Button, FilterContainer } from './styled';


export const MovieSectionFilter = (
      {selected, setter}
    : {selected:number, setter: React.Dispatch<SetStateAction<number>>}
   ) => {


    const MovieSectionContext = useContext( MovieSectionCtx );

    const handleClick = (index: number): void => {
        setter(index);
    };

    return (
        <FilterContainer>
            <div className="container">
            {
                MovieSectionContext?.item?.categories?.map((category:string, index: number)=>(
                    <Button className={selected === index ? 'active' : ''} key={uuidv4()} onClick={() => {handleClick(index)}}>
                        {category}
                    </Button>
                ))
            }
            </div>
        </FilterContainer>
    );
}