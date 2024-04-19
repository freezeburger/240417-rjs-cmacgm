import React, { FC } from 'react';
import { BaseCardWrapper } from './BaseCard.styled';

interface BaseCardProps {}

const BaseCard: FC<BaseCardProps> = () => (
 <BaseCardWrapper data-testid="BaseCard">
    BaseCard Component
 </BaseCardWrapper>
);

export default BaseCard;
