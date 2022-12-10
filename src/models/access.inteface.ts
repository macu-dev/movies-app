import { ReactElement } from 'react';


export interface AccessProps {
  url: string,
  title?:string
  className?:string,
  children?: ReactElement; 
}
