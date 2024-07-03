'use client';

import headerData from '@/components/header/header-data';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, IconButton, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import './header.scss';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathName = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <Box className="header-container" component="nav">
      <Container className="header">
        <Box className="header__icon-wrapper">
          <MuiLink
            href="/"
            className="header__logo-container"
            aria-label="Home"
          >
            <Image
              src="/assets/codeforbc-logo.svg"
              alt="Code for BC Logo"
              width={84}
              height={76}
              priority={true}
              className="header__logo"
            />
          </MuiLink>
          <IconButton
            onClick={toggleMenu}
            className="header__menu-icon-container"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="header__menu-icon" />
            ) : (
              <MenuIcon className="header__menu-icon" />
            )}
          </IconButton>
        </Box>
        <Box
          className={
            isMobileMenuOpen
              ? 'header__navbar-container'
              : 'header__navbar-container header__navbar-container--close'
          }
        >
          <ul className="header__navbar">
            {headerData.map((tab, index) => (
              <li key={`header-link-${index}`} className="header__navbar-item">
                <Link
                  className={`header__navbar-link ${pathName === tab.href ? 'header__navbar-link--active' : ''}`}
                  href={tab.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
