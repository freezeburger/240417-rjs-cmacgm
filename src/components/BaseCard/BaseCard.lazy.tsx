import React, { lazy, Suspense } from 'react';

const LazyBaseCard = lazy(() => import('./BaseCard'));

const BaseCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBaseCard {...props} />
  </Suspense>
);

export default BaseCard;
