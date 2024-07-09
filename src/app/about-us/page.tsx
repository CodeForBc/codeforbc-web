import { Metadata } from 'next';
import AboutUsClient from './page.client';

export const metadata: Metadata = {
  title: 'About Us & Get Engaged | CodeForBC',
  description:
    'Learn more about CodeForBC and How to join the CodeForBC organization',
};

export default function AboutUs() {
  return <AboutUsClient />;
}
