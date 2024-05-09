'use client';

import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import QuestionAndAnswer from '../question-and-answer/question-and-answer';
import questionAndAnswersData from './faq-data';
import './faq.scss';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${questionAndAnswersData
                  .map(
                    (questionAndAnswer: FAQItem) =>
                      `{
                    "@type": "Question",
                    "name": "${questionAndAnswer.question}",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "${questionAndAnswer.answer}"
                    }
                  }`
                  )
                  .join(',')}
              ]
            }
          `}
        </script>
      </Head>
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
      </Box>
    </>
  );
}
