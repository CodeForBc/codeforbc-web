import { headers } from 'next/headers';
import React from 'react';

export default function Project() {
  const headersList = headers();
  const fullUrl = headersList.get('referer') || '';
  const paths = fullUrl.split('/');

  const projectId = paths[paths.length - 1];

  return <section>{projectId}</section>;
}
