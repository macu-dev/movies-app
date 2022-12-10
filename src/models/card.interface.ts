import { ReactElement } from 'react';


export interface CardProps {
    item: Card;
    children?: ReactElement | ReactElement[]; 
}


export interface CardImage {
    src?: string;
    width?: string | number;
    height?: string | number;
    layout?: "fixed" | "fill" | "intrinsic" | "responsive" | undefined;
    alt?: string
}

export interface Card {
    title: string;
    pretitle?: string;
    subtitle?:string;
    img?: CardImage;
}

export interface CardContextProps {
    item: Card | null;
}


export interface CardHOCProps {
    ({ children, item }: CardProps ):JSX.Element,
    Pretitle: ({ pretitle }: { pretitle?: string }) => JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Subtitle: ({ subtitle }: { subtitle?: string }) => JSX.Element,
    Image: ({ img }: { img?: CardImage }) => JSX.Element,
}
