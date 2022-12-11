import styled from 'styled-components';
import { Theme } from '@/styles/theme'

const { colors } = Theme;


export const Section = styled.section`
    padding: 50px 0;

`;


export const Button = styled.button`


`;

export const FilterContainer = styled.div`
    padding: 20px 0;
    .container{
        display: inline-flex;
        border-radius: 500px;
        overflow: hidden;
        box-shadow: rgb(0 0 0 / 10%) 0 8px 20px;
        button{
            background: #fff;
            border: 0;
            text-transform: uppercase;
            padding: 12px 19px;
            font-weight: 700;
            transition: .2s;
            cursor: pointer;
            &.active{
                background: ${colors.secondary};
                color: #fff;
                opacity: 1 !important;
            }

            &:hover{
                opacity: .5;
                background: ${colors.secondary};
                color: #fff;
            }
        }
    }

`;
