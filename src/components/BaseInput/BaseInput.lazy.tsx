import React, { lazy, Suspense } from 'react';

const LazyBaseInput = lazy(() => import('./BaseInput'));

const BaseInput = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBaseInput {...props} />
  </Suspense>
);

export default BaseInput;
