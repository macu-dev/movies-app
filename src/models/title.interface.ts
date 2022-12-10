import { ReactElement } from 'react';


export interface TitlesProps {
    item: Titles;
    children?: ReactElement | ReactElement[]; 
}


export interface Titles {
    title: string;
    pretitle?: string;
    subtitle?:string;
}

export interface TitlesContextProps {
    item: Titles | null;
}


export interface TitlesHOCProps {
    ({ children, item }: TitlesProps ):JSX.Element,
    Pretitle: ({ pretitle }: { pretitle?: string }) => JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Subtitle: ({ subtitle }: { subtitle?: string }) => JSX.Element,
}
