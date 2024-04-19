import { FC, PropsWithChildren } from 'react';
import { LayoutBaseWrapper } from './LayoutBase.styled';

interface LayoutBaseProps extends PropsWithChildren{}

const LayoutBase: FC<LayoutBaseProps> = ({children}) => (
 <LayoutBaseWrapper>
    {children}
 </LayoutBaseWrapper>
);

export default LayoutBase;
