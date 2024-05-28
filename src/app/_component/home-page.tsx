import Banner from '@/components/banner/banner';
import FrequentlyAskedQuestions from '@/components/faq/faq';
import MissionOverview from '@/components/mission-overview/mission-overview';
import ProjectOverview from '@/components/project-overview/project-overview';

export function HomePage() {
  return (
    <div>
      <Banner />
      <ProjectOverview />
      <MissionOverview />
      <FrequentlyAskedQuestions />
    </div>
  );
}
