import { ReactElement } from 'react';


export interface HeaderProps {
    item: Header,
    children?: ReactElement | ReactElement[]; 
}

export interface Header {
    title?: string;
    pretitle?: string;
    subtitle?:string;
    description?:string;
}

export interface HeaderContextProps {
    item: Header | null;
}


export interface HeaderHOCProps {
    ({ children, item }: HeaderProps ):JSX.Element,
    Pretitle: ({ pretitle }: { pretitle?: string }) => JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Subtitle: ({ subtitle }: { subtitle?: string }) => JSX.Element,
    Description: ({ description }: { description?: string }) => JSX.Element,
}
