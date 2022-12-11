import React from 'react';
import { createContext } from 'react';

import { MovieSectionContextProps, SectionProps } from '@/models/movieSection.interface';

import { Section } from '@/components/MovieSection/styled';


export const MovieSectionCtx = createContext<MovieSectionContextProps | null>(null);


export const MovieSection = ({ children, item }: SectionProps) => {
    
    return (
        <MovieSectionCtx.Provider value={{item}}>
            <Section>
                { children }
            </Section>
        </MovieSectionCtx.Provider>
    )
};


