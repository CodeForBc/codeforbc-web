import { Metadata } from 'next';
import Head from 'next/head';
import { HomePage } from './_component/home-page';

export const metadata: Metadata = {
  title: 'Home | CodeForBC',
  description: 'Be a Force for Good in BC!',
};

export default function Home() {
  return (
    <>
      <HomePage />
      <Head>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CodeForBC",
            "legalName": "Code For BC",
            "url": "https://www.codeforbc.ca/",
            "logo": "https://www.codeforbc.ca/assets/logo.webp",
            "foundingDate": "2024",
            "founders": [
              {
              "@type": "Person",
              "name": "Sam Huo"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vancouver",
              "addressRegion": "Lower Mainland region of British Columbia",
             "addressCountry": "CA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Info",
              "email": "codeforbc@gmail.com"
            },
            "sameAs": [
              "https://www.linkedin.com/company/code-for-bc/"
            ]
          }`}
        </script>
      </Head>
    </>
  );
}
