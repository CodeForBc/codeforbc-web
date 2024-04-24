import { Metadata } from 'next';
import JoinUsClient from './page.client';

export const metadata: Metadata = {
  title: 'Join Us | CodeForBC',
  description: 'How to join the CodeForBC organization',
};

export default function JoinUs() {
  return <JoinUsClient />;
}
