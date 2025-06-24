'use client';

import React from 'react';
import { Header } from '@/components/header/header';
import { GlobalError } from '@/pages/global-error';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <Header />
      <GlobalError error={error} reset={reset} />
    </div>
  );
}
