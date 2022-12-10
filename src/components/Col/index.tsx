import { ColumnProps } from "@/models/col.interface";
import Column  from "./style";


const Col = ({lg='', sm='', md='', xl='', className='', children}: ColumnProps) => {
    return (
        <Column
            className={className} 
            lg={lg} 
            sm={sm}
            md={md} 
            xl={xl}>
            {children}
        </Column>
    );
};

export default Col;
