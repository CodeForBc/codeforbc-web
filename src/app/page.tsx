import { Metadata } from 'next';
import Script from 'next/script';
import { HomePage } from './_component/home-page';

export const metadata: Metadata = {
  title: 'Home | CodeForBC',
  description: 'Be a Force for Good in BC!',
};

export default function Home() {
  return (
    <>
      <HomePage />

      <Script id="jsonLD_home-page" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'CodeForBC',
          legalName: 'Code For BC',
          url: 'https://www.codeforbc.ca/',
          logo: 'https://www.codeforbc.ca/assets/codeforbc-logo.svg',
          foundingDate: '2024',
          founders: [
            {
              '@type': 'Person',
              name: 'Sam Huo',
            },
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Vancouver',
            addressRegion: 'Lower Mainland region of British Columbia',
            addressCountry: 'CA',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Info',
            email: 'codeforbc@gmail.com',
          },
          sameAs: ['https://www.linkedin.com/company/code-for-bc/'],
        })}
      </Script>
    </>
  );
}
