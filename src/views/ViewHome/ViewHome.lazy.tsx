import React, { lazy, Suspense } from 'react';

const LazyViewHome = lazy(() => import('./ViewHome'));

const ViewHome = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewHome {...props} />
  </Suspense>
);

export default ViewHome;
