import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

const {fonts, colors} = Theme;


export const GlobalStyle = createGlobalStyle`
    
    body {
        margin: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        background-color: ${colors.primary};
        font-family: ${fonts.primary};

        &:focus-visible {
            outline: none; 
            box-shadow: 0 0 0 2px #fff; 
            border: 2px solid #000;
        }
    
        &.hidden {
            overflow: hidden;
        }
    }

    html,body {
        box-sizing: border-box;
        min-height: 100vh;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    h1{font-size: 62px}
    h2{font-size: 32px}
    p{font-size: 18px}

    h1, h2, h3, h4, h5 {
        padding: 0;
        margin: 0;
        line-height: 1.2em;
    }

    p,li {
        padding: 0;
        margin: 0;
        line-height: 1.2em;
    }

    ul {
        padding: 0;
        list-style: none;
        li {
            padding: 10px 0 10px 20px;
            position: relative;
        }

    
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    
    .text-center {
        text-align: center;
    }

    .grecaptcha-badge {
        display: none !important;
    }

    .fade_in {
        animation: fadeInAnimation ease 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    
    .only {
        &--mobile {
            display: none;
            @media (max-width: 991px){
                display: block
            }
        }
        &--desktop {
            @media (max-width: 991px){
                display: none;
            }
        }
    }

    .col-align-center {
        justify-content: center;
        display: flex;
    }
`