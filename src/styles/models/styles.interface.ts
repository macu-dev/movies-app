import 'styled-components';


interface Fonts {
    primary: string,
    secondary: string
}

interface Colors {
    primary: string,
    secondary: string,
    terciary: string
}

export default interface ColProps{
    lg: string | number,
    md: string | number,
    sm: string | number,
    xl: string | number,
}



declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Colors,
        fonts: Fonts
    }
}