import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import { Settings } from 'react-slick';

import { MovieSectionCtx } from "@/context/MovieSection";
import { Movie } from '@/models/movieSection.interface';

import Carousel from '../Carousel';
import Card from '../Card';
import { Row } from '../Row';
import Col from '../Col';


export const MovieSectionCarousel = ({settings, selected}: { settings?:Settings, selected: number }) => {

    const MovieSectionContext = useContext( MovieSectionCtx );

    const mediaTypes = MovieSectionContext?.item?.categories;
 
    const selectedMediaType = typeof mediaTypes != 'undefined' ? mediaTypes[selected] : 'all';

    const filter = (movie:Movie) => movie.media_type ===  selectedMediaType || selectedMediaType === 'all';

     const moviesFiltered = MovieSectionContext?.item?.movies?.filter(filter) || [];

    const isMovies = moviesFiltered?.length ? moviesFiltered.length > 0 : false;


    return (
        isMovies 
          ? <div>
                {
                    moviesFiltered.length >=4 
                    ?   <Carousel carouselSettings={settings}>
                    
                        {   moviesFiltered?.map((movie:Movie) => (
                            <div className="card-container">
                                <Card key={uuidv4()} item={movie}>
                                    <Card.Image />
                                    <div className="card-text">
                                        <Card.Title />
                                        <Card.Subtitle />
                                        <Card.Footer />
                                    </div>
                                </Card>
                            </div>
                        ))}
                    
                        </Carousel>
            
                    :  <Row>

                        {moviesFiltered?.map((movie:Movie) => (
                            <Col lg={3} key={uuidv4()}>
                                <Card item={movie}>
                                    <Card.Image />
                                    <div className="card-text">
                                        <Card.Title />
                                        <Card.Subtitle />
                                        <Card.Footer />
                                    </div>
                                </Card>
                            </Col>
                        ))}
                            

                       </Row>
                }
                
            
            </div>
          : <p>Oops!! parece que aqui no hay nada</p>
    );
}
