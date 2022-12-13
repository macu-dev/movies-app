import React from 'react';
import Slider from "react-slick";

import { CarouselProps } from "@/models/carousel.interface";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CarouselContainer } from './styled';



const Carousel = ({children, className, carouselSettings}:CarouselProps) => {
    return (
        <CarouselContainer className={className}>
            <Slider {...carouselSettings}>
                {children}
            </Slider>
        </CarouselContainer>
    );
}
 
export default Carousel;