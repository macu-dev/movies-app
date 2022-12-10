import { ReactElement } from 'react';


export interface ColumnProps {
  lg?:  string |  number,
  sm?:  string |  number,
  md?:  string |  number,
  xl?:  string |  number,
  className?:string,
  children?: ReactElement | ReactElement[]; 
}
