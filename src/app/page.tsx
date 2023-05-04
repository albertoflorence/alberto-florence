'use client';

import Home from '@/templates/Home';
import useMounted from '@/hooks/useMounted';

export default function Index() {
  const mounted = useMounted();

  return <Home visible={mounted} />;
}
