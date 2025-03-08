'use client';

import { useScrollRestore } from '@/hooks/use-scroll-restore';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useScrollRestore();

  return <>{children}</>;
}
