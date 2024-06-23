import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FrequentlyAskedQuestions from './faq';
import questionAndAnswersData from './faq-data';

jest.mock('../question-and-answer/question-and-answer', () => ({
  __esModule: true,
  default: ({ question, answer }: { question: string; answer: string }) => (
    <div data-testid="question-and-answer">
      <div>{question}</div>
      <div>{answer}</div>
    </div>
  ),
}));

describe('FrequentlyAskedQuestions', () => {
  test('renders FAQ heading', () => {
    render(<FrequentlyAskedQuestions />);
    const heading = screen.getByText(/Frequently Asked Questions/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders all question and answer pairs', () => {
    render(<FrequentlyAskedQuestions />);
    const qaElements = screen.getAllByTestId('question-and-answer');
    expect(qaElements).toHaveLength(questionAndAnswersData.length);
    questionAndAnswersData.forEach((qa) => {
      expect(screen.getByText(qa.question)).toBeInTheDocument();
      expect(screen.getByText(qa.answer)).toBeInTheDocument();
    });
  });

  test('renders mailto link', () => {
    render(<FrequentlyAskedQuestions />);
    const mailtoLink = screen.getByRole('link', {
      name: /codeforbc@gmail.com/i,
    });
    expect(mailtoLink).toBeInTheDocument();
    expect(mailtoLink).toHaveAttribute('href', 'mailto:codeforbc@gmail.com');
  });

  test('renders JSON-LD script tag', () => {
    render(<FrequentlyAskedQuestions />);
    const scriptTag = document.querySelector('#jsonLD_FAQ');
    const faqJson = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questionAndAnswersData.map((qa) => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qa.answer,
        },
      })),
    };
    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag).toHaveTextContent(JSON.stringify(faqJson));
  });
});
