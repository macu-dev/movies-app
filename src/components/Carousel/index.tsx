import React from 'react';
import Slider from "react-slick";
import { CarouselProps } from "@/models/carousel.interface";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Carousel = ({children, className, carouselSettings}:CarouselProps) => {
    return (
        <div className={className}>
            <Slider {...carouselSettings}>
                {children}
            </Slider>
        </div>
    );
}
 
export default Carousel;