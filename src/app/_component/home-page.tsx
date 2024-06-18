import Banner from '@/components/banner/banner';
import FrequentlyAskedQuestions from '@/components/faq/faq';
import MissionOverview from '@/components/mission-overview/mission-overview';
import ProjectOverview from '@/components/project-overview/project-overview';
import { Button } from '@mui/material';

export function HomePage() {
  return (
    <div>
      <Banner />
      <ProjectOverview />
      <MissionOverview headerSize="h2">
        <Button
          className="mission-overview__button"
          variant="outlined"
          size="large"
          href="/join-us"
        >
          Learn More
        </Button>
      </MissionOverview>
      <FrequentlyAskedQuestions />
    </div>
  );
}
