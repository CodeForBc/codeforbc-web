import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import QuestionAndAnswer from './question-and-answer';

const mockData = {
  question: 'What is CodeForBC?',
  answer:
    'CodeForBC is a community of developers who volunteer their time to work on civic tech projects.',
};

describe('QuestionAndAnswer Component', () => {
  test('renders question', () => {
    render(
      <QuestionAndAnswer
        question={mockData.question}
        answer={mockData.answer}
      />
    );
    const questionElement = screen.getByText(mockData.question);
    expect(questionElement).toBeInTheDocument();
  });

  test('renders answer when accordion is expanded', () => {
    render(
      <QuestionAndAnswer
        question={mockData.question}
        answer={mockData.answer}
      />
    );
    const expandButton = screen.getByRole('button');
    fireEvent.click(expandButton);
    const answerElement = screen.getByText(mockData.answer);
    expect(answerElement).toBeInTheDocument();
  });
});
