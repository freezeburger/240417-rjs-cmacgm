import React, { FC, PropsWithChildren } from 'react';
import { BaseButtonWrapper } from './BaseButton.styled';

interface BaseButtonProps extends PropsWithChildren{
   onClick?:()=> void;
   level?:'success' | 'primary' | 'error'
}

const BaseButton: FC<BaseButtonProps> = ( { children, onClick, level } ) => (
 <BaseButtonWrapper data-testid="BaseButton" onClick={onClick} level={level as string}>
    {children}
 </BaseButtonWrapper>
);

const MemoizedComponent = React.memo(BaseButton, (prev,next) => {
   return prev.children === next.children; // arePropsEquals
});

export default MemoizedComponent;
