import { Metadata } from 'next';
import AboutUsClient from './page.client';

export const metadata: Metadata = {
  title: 'Join Us | CodeForBC',
  description: 'How to join the CodeForBC organization',
};

export default function About() {
  return <AboutUsClient />;
}
