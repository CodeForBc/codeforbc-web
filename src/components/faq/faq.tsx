'use client';

import { Box, Link, Typography } from '@mui/material';
import Script from 'next/script';
import React from 'react';
import QuestionAndAnswer from '../question-and-answer/question-and-answer';
import questionAndAnswersData from './faq-data';
import './faq.scss';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FrequentlyAskedQuestions() {
  const mainEntityArray = questionAndAnswersData.map((questionAndAnswer) => ({
    '@type': 'Question',
    name: questionAndAnswer.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: questionAndAnswer.answer,
    },
  }));

  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntityArray,
  };
  return (
    <>
      <Script id="jsonLD_FAQ" type="application/ld+json">
        {JSON.stringify(faqJson)}
      </Script>

      <Box className="faq">
        <Typography variant="h2" className="faq__heading">
          Frequently Asked Questions
        </Typography>
        <Box className="faq__list">
          {questionAndAnswersData.map((questionAndAnswer: FAQItem) => (
            <QuestionAndAnswer
              key={questionAndAnswer.question}
              question={questionAndAnswer.question}
              answer={questionAndAnswer.answer}
            />
          ))}
        </Box>
        <Box className="faq__mailto">
          <Typography className="faq__mailto-title">
            Still have questions in mind?
          </Typography>
          <Typography className="faq__mailto-text">
            Send us an email at{' '}
            <Link href="mailto:codeforbc@gmail.com">codeforbc@gmail.com</Link>,
            and our team will be happy to assist you.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
