import { MovieSection as MovieSectionHOC } from '@/context/MovieSection';
import { MovieSectionHOCProps } from '@/models/movieSection.interface';

import { MovieSectionTitle } from './MovieSectionTitle';
import { MovieSectionFilter} from './MovieSectionFilter';
import {  MovieSectionCarousel } from './MovieSectionCarousel';


export { MovieSectionTitle } from './MovieSectionTitle';
export { MovieSectionCarousel } from './MovieSectionCarousel';
export { MovieSectionFilter} from './MovieSectionFilter';


export const MovieSection: MovieSectionHOCProps = Object.assign(    MovieSectionHOC, {
    Title: MovieSectionTitle,
    Carousel: MovieSectionCarousel,
    Filter: MovieSectionFilter
})


export default MovieSection;