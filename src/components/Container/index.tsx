import React from 'react';
import { HtmlProps } from '@/models/html.interface';
import {ContainerStyle} from './style';

const Container = ({children, className}: HtmlProps) => {
    return (
        <ContainerStyle className={className}>
            {children}
        </ContainerStyle>
    );
};

export default Container;
