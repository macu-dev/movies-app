import React,{ ReactElement } from 'react';
import { Settings as CarouselSettings } from 'react-slick';


export interface CarouselProps {
  className?:string,
  carouselSettings?: CarouselSettings;
  children?: ReactElement | ReactElement[];
}