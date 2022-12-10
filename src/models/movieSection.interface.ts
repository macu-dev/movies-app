import { ReactElement } from 'react';
import { Settings } from 'react-slick';


export interface SectionProps {
    item?: MovieSection;
    children?: ReactElement | ReactElement[]; 
}

export interface Movie {
    adult?: boolean;
    backdrop_path?: string;
    id?: number; 
    title?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    poster_path? : string;
    media_type?: string;
    genre_ids?: number[];
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}


export interface MovieSection {
    title?: string;
    categories?: string[]; // all, movies, tvshow
    selected? : number;
    movies?:  Movie[];

}

export interface MovieSectionContextProps {
    item: MovieSection | null | undefined;
}


export interface MovieSectionHOCProps {
    ({ children, item }: SectionProps ):JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Carousel: ({ settings }: { settings?: Settings }) => JSX.Element,
    Filter: () => JSX.Element

}
