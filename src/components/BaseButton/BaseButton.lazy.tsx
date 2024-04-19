import React, { lazy, Suspense } from 'react';

const LazyBaseButton = lazy(() => import('./BaseButton'));

const BaseButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBaseButton {...props} />
  </Suspense>
);

export default BaseButton;
