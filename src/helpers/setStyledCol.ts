import setStyledFlex from './setStyledFlex';
import  calculatorCol from './calculatorCol';

export const setStyledCol = (value : number | string): string => {
    switch (value) {
        case 'auto': 
            return setStyledFlex('auto');
        case 1: case 2: 
        case 3: case 4: case 5:
        case 6: case 7: case 8:
        case 9: case 10: case 11:  
        case 12: case 14: case 18:
        case 25:  
            return setStyledFlex(calculatorCol(value));
            
        default:
            return `el valor ${value} no esta definido`;
        
    }
}