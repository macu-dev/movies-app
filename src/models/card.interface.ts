import { ReactElement } from 'react';
import { Movie } from './movieSection.interface';


export interface CardProps {
    item:  Movie ;
    children?: ReactElement | ReactElement[];
    id?: number 
}

export interface Card extends Movie {};
// export interface Card {
//     title?: string;
//     id?: number;
//     pretitle?: string;
//     subtitle?:string;
//     img?: string;
//     description?: string
// }

export interface CardContextProps {
    item: Movie ;
}


export interface CardHOCProps {
    ({ children, item, id }: CardProps ):JSX.Element,
    Pretitle: ({ pretitle }: { pretitle?: string }) => JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Subtitle: ({ subtitle }: { subtitle?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Footer: ({ description }: { description?: string }) => JSX.Element
}
