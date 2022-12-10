import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import { Settings } from 'react-slick';

import { MovieSectionCtx } from "@/context/MovieSection";
import { Movie } from '@/models/movieSection.interface';

import Carousel from '../Carousel';
import Card from '../Card';


export const MovieSectionCarousel = ({settings}: { settings?:Settings }) => {

    const MovieSectionContext = useContext( MovieSectionCtx );

    return (
        <Carousel carouselSettings={settings}>
            {
                MovieSectionContext?.item?.movies?.map(({title, media_type, poster_path, id }:Movie)=>(
                    <Card key={uuidv4()} item={{title, subtitle: media_type, img: poster_path, id }}>
                        <Card.Image />
                        <Card.Title />
                        <Card.Subtitle />
                        <Card.Footer />
                    </Card>
                ))
            }
        </Carousel>
    );
}