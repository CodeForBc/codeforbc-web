'use client';

import headerData from '@/components/header/header-data';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Tab,
  Tabs,
} from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import HeaderEnum from '../../enum/header-enum';
import generateHeaderData from '../../utils/header-map/header-map';
import './header.scss';

function Header() {
  const pathToEnumMap = generateHeaderData();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(
    pathToEnumMap[pathname] || false
  );

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

  useEffect(() => {
    setCurrentPath(pathToEnumMap[pathname] || false);
  }, [pathToEnumMap, pathname]);

  const handleChange = (
    event: React.ChangeEvent<any>,
    newValue: HeaderEnum
  ) => {
    setCurrentPath(newValue);
  };

  return (
    <Box component={'header'} className="header-outer-box">
      <Link href="/" className="title-link">
        <Image
          src="./assets/codeforbc-logo.svg"
          alt="Description"
          width={64}
          height={64}
        />
      </Link>
      <Box className="header-inner-box">
        <Tabs
          value={currentPath}
          onChange={handleChange}
          className="navigation-tab"
        >
          {headerData.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              value={tab.value}
              href={tab.href}
              role="button"
              className="header-tab"
              component={Link}
            />
          ))}
        </Tabs>
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
