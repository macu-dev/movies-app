
import { HtmlProps } from '@/models/html.interface';
import RowStyle  from './style';

export const Row = ({children, className}: HtmlProps) => {
    return (
        <RowStyle className={className}>
            {children}
        </RowStyle>
    );
};
