import ColProps from "@/styles/models/styles.interface";
import { setStyledCol } from "./setStyledCol";

const renderCss = (props: ColProps): string => {
    let css = '';

    if(props.lg) css += `
        @media (min-width: 992px){
          ${setStyledCol(props.lg)}
        }
    `;

    if(props.md) css +=`
        @media (min-width: 768px){
            ${setStyledCol(props.md)}
        }
    `;
    
    if(props.sm) css +=`
        @media (min-width: 576px){
            ${setStyledCol(props.sm)}
        }
    `;
      
    if(props.xl) css +=`
        @media (min-width: 1200px){
            ${setStyledCol(props.xl)}
        }
    `;
    
    return css;
}


export default renderCss;