import styled from 'styled-components';

import { Theme } from '@/styles/theme'

const { colors } = Theme;


export const CardContainer = styled.div`
    box-shadow: rgb(0 0 0 / 10%) 0 8px 20px;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    padding: 20px;

    h2{
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    h3{
        font-size: 15px;
        font-weight: 400;
    }

    p{
        color: ${colors.secondary};
        font-weight: 700;
        font-size: 14px;
    }

`;


export const CardImage = styled.div`
    padding-bottom: 15px;
    img{
        width: 100%;
        object-fit: cover;
    }

`;

export const CardFooterContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

`;


export const FavoriteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    transition: .2s;
    opacity: .7;
    &:hover{
        opacity: 1;
    }

    &.active{
        svg{
            path{
                fill: red;
                stroke: red;
            }
        }
    }

`;
