import Link from 'next/link';

export const volunteerTabData = [
  {
    title: 'Tell Us About Yourself',
    description: (
      <span className="volunteer-tab__item-text">
        Fill out our{' '}
        <Link
          className="volunteer-tab__item-text volunteer-tab__item-text--link"
          href="https://tally.so/embed/3jMe1x"
        >
          2 minute form
        </Link>{' '}
        so we can help match you with opportunities.
      </span>
    ),
  },
  {
    title: 'Onboarding',
    description:
      'Our team will reach out and set up a first meeting to get to know each other.',
  },
  {
    title: 'Have Questions?',
    description:
      'Find you answers in FAQ or email codeforbc@gmail.com with any questions or feedback.',
  },
];

export const partnerTabData = [
  {
    icon_id: 'Make An Impact',
    title: 'Make An Impact',
  },
  {
    icon_id: 'Community',
    title: 'Give Back To Your Community',
  },
  {
    icon_id: 'fluent',
    title: 'Attract Talents',
  },
];
