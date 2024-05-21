'use client';

import headerData from '@/components/header/header-data';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Link as MuiLink,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import './header.scss';

function Header() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<HTMLElement | null>(
    null
  );
  const mobileMenuOpen = Boolean(mobileMenuAnchor);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <Box component={'header'} className="header-outer-box">
      <MuiLink href="/" className="title-link">
        <Image
          src="./assets/codeforbc-logo.svg"
          alt="Description"
          width={64}
          height={64}
        />
      </MuiLink>
      <Box className="header-inner-box">
        <ul className="nav__header">
          {headerData.map((tab, index) => (
            <li key={`header-link-${index}`} className="nav__list">
              <Link href={tab.href}>{tab.label}</Link>
            </li>
          ))}
        </ul>
        <Box className="mobile-menu-btn">
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            onClose={handleClose}
            open={mobileMenuOpen}
            anchorEl={mobileMenuAnchor}
          >
            {headerData.map((tab, index) => (
              <MenuItem
                onClick={handleClose}
                key={`menu-item-${index}`}
                className="header-tab"
              >
                <Link href={tab.href}>{tab.label}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
