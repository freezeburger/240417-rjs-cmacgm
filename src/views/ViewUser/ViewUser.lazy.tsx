import React, { lazy, Suspense } from 'react';

const LazyViewUser = lazy(() => import('./ViewUser'));

const ViewUser = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewUser {...props} />
  </Suspense>
);

export default ViewUser;
