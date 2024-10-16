'use client';

import { Link as LinkInterface } from '@/app/dataModels/link';
import { Project as ProjectInterface } from '@/app/dataModels/project';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './project-card.scss';

export default function Project({
  title,
  description,
  links,
  languages,
  tools,
  projectKey,
  projectImage,
  className,
}: ProjectInterface) {
  return (
    <Card className={`project-card project-overview__card ${className}`}>
      <CardMedia
        component="a"
        className="project-card-media"
        image={projectImage}
      />
      <CardContent className="project-card-content">
        <Typography
          variant="h5"
          component="div"
          sx={{ fontFamily: 'inherit', fontWeight: '700' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: 'inherit' }}
          mt={1}
          mb={2}
        >
          {description}
        </Typography>

        {languages && (
          <Typography component="div" variant="body2" mt={1}>
            <Typography variant="body2" sx={{ color: 'grey' }}>
              Languages
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: '700' }}>
              {languages.join(', ')}
            </Typography>
          </Typography>
        )}

        {tools && (
          <Typography component="div" variant="body2" mt={1}>
            <Typography variant="body2" sx={{ color: 'grey' }}>
              Tools
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: '700' }}>
              {tools.join(', ')}
            </Typography>
          </Typography>
        )}

        {links && (
          <Typography component="div" variant="body2" mt={1}>
            <Typography variant="body2" sx={{ color: 'grey' }}>
              Links
            </Typography>
            <Typography variant="body2" mt={-0.25} ml={-1}>
              {links.map((link: LinkInterface, idx: number) => (
                <IconButton href={link.url} key={`project-link-${idx}`}>
                  <Image
                    src="/assets/github-mark.svg"
                    alt={link.title}
                    width={20}
                    height={20}
                  />
                </IconButton>
              ))}
            </Typography>
          </Typography>
        )}

        <Typography
          component="div"
          variant="body2"
          mt={1}
          className="project-link-parent"
        >
          <Link href={`/projects/${projectKey}`} className="project-link">
            View Project
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
