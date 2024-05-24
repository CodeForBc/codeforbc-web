'use client';

import { Box, Container, IconButton, Link } from '@mui/material';
import Image from 'next/image';
import './footer.scss';

function Footer() {
  return (
    <Box component="footer" className="footer-container">
      <Container className="footer">
        <Box className="footer__wrapper">
          <Box className="footer__menu">
            <Link href="/" className="footer__logo">
              CodeForBC
            </Link>
            <Box className="footer__buttons">
              <Link href="/code-of-conduct" className="footer__button">
                Code of Conduct
              </Link>
              <Link
                href="/join-us"
                className="footer__button footer__button--highlight"
              >
                Join Us!
              </Link>
              <Link href="#" className="footer__button">
                Contact Us
              </Link>
            </Box>
          </Box>
          {/* @todo
          <form className="footer__newsletter">
            <label htmlFor="" className="footer__label">
              Get the latest updates about CodeForBC
            </label>
            <Box className="footer__group">
              <input
                className="footer__input"
                placeholder="Enter your Email."
              />

              <Button className="footer__subscribe-button">Subscribe</Button>
            </Box>
          </form>
          */}
        </Box>
        <Box className="footer__wrapper">
          <Box className="footer__social-icons">
            <IconButton
              className="footer__icon-button"
              href="https://github.com/CodeForBC"
              aria-label="github account"
            >
              <Image
                src="/assets/github_Icon.svg"
                alt="GitHub"
                width={20}
                height={20}
              />
            </IconButton>
            <IconButton
              className="footer__icon-button"
              href=" https://www.linkedin.com/company/code-for-bc/"
              aria-label="linkedin account"
            >
              <Image
                src="/assets/linkedin_Icon.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </IconButton>
          </Box>
          <Box className="footer__links">
            <Link href="#" className="footer__link">
              Terms of Service
            </Link>
            <Link href="#" className="footer__link">
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
