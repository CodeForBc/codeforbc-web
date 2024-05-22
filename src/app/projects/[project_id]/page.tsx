'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export default function Project() {
  const pathname = usePathname();
  const paths = pathname.split('/');

  const projectId = paths[paths.length - 1];

  return <div>{projectId}</div>;
}
