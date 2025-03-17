'use client';

import React from 'react';
import Error from '@/components/global-error';
import { Header } from '@/components/header';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <Header />
      <Error error={error} reset={reset} />
    </div>
  );
}
