'use client';

import headerData from '@/components/header/header-data';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Link as MuiLink,
} from '@mui/material';
import { Lexend } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import './header.scss';

const lexend = Lexend({ subsets: ['latin'] });

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  // const [mobileMenuAnchor, setMobileMenuAnchor] = useState<HTMLElement | null>(
  //   null
  // );
  // const [menuClose, setMenuClose] = useState<boolean>(false);
  // const mobileMenuOpen = Boolean(mobileMenuAnchor);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setMobileMenuAnchor(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setMobileMenuAnchor(null);
  // };

  return (
    <Box className="header-container">
      <Container className="header">
        <Box className="header__icon-wrapper">
          <MuiLink href="/" className="header__logo-container">
            <Image
              src="/assets/codeforbc-logo.svg"
              alt="Description"
              width={84}
              height={76}
              priority={true}
              className="header__logo"
            />
          </MuiLink>
          {isMobileMenuOpen ? (
            <IconButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="header__menu-icon"
            >
              <CloseIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="header__menu-icon"
            >
              <MenuIcon />
            </IconButton>
          )}
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
                <Link className="header__navbar-link" href={tab.href}>
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </Box>

    // <Box component={'header'} className="header-outer-box">
    //   <MuiLink href="/" className="title-link">
    //     <Image
    //       src="/assets/codeforbc-logo.svg"
    //       alt="Description"
    //       width={84}
    //       height={76}
    //       priority={true}
    //     />
    //   </MuiLink>
    //   <Box className="header-inner-box">
    //     <ul className="nav__header">
    //       {headerData.map((tab, index) => (
    //         <li key={`header-link-${index}`} className="nav__list">
    //           <Link href={tab.href}>{tab.label}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //     <Box className="mobile-menu-btn">
    //       <IconButton onClick={handleClick}>
    //         {menuClose ? <MenuIcon /> : <CloseIcon />}
    //       </IconButton>
    //       <Menu
    //         onClose={handleClose}
    //         open={mobileMenuOpen}
    //         anchorEl={mobileMenuAnchor}
    //       >
    //         {headerData.map((tab, index) => (
    //           <MenuItem
    //             onClick={handleClose}
    //             key={`menu-item-${index}`}
    //             className={`header-tab ${lexend.className}`}
    //           >
    //             <Link key={`menu-item-${index}`} href={tab.href}>
    //               {tab.label}
    //             </Link>
    //           </MenuItem>
    //         ))}
    //       </Menu>
    //     </Box>
    //   </Box>
    // </Box>
  );
}

export default Header;
