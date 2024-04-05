import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import coreValueData from './core-values-data';
import './core-values.scss';

export default function CoreValues() {
  return (
    <Container className="core-value">
      <Box className="core-value__text-container">
        <Typography className="page-heading page-heading--secondary">
          Core Value
        </Typography>
        <Box className="core-value__list">
          {coreValueData.map((coreValueItem) => (
            <Box key={coreValueItem.icon_id} className="core-value__item">
              <Box className="core-value__icon-container">
                <svg className="core-value__icon">
                  <use
                    xlinkHref={`/assets/core-values-sprite.svg#${coreValueItem.icon_id}`}
                  ></use>
                </svg>
              </Box>
              <Box className="core-value__item-text-container">
                <Typography className="core-value__item-title">
                  {coreValueItem.title}
                </Typography>
                <Typography className="core-value__item-detail">
                  {coreValueItem.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="core-value__image-container">
        <Image
          src="./assets/core-values.png"
          alt="Description"
          width={562}
          height={422}
          className="core-value__image"
        />
      </Box>
    </Container>
  );
}
