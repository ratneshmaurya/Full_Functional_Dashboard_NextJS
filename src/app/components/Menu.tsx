'use client'

import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import LockIcon from '@mui/icons-material/Lock';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import DeleteIcon from '@mui/icons-material/Delete';
//import CompanyLogo from './CompanyLogo'; // Import your company logo component here
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

const menuItems = [
  {
    heading: 'HOME',
    items: [
      { text: 'Dashboard', href: '/dashboard', icon: <HomeIcon /> }
    ]
  },
  {
    heading: 'FILE STORE',
    items: [
      { text: 'File Store', href: '/dashboard/file-store', icon: <CloudQueueIcon /> },
      { text: 'Files', href: '/dashboard/files', icon: <FileCopyIcon /> },
      { text: 'Permissions', href: '/dashboard/permissions', icon: <LockIcon /> }
    ]
  },
  {
    heading: 'CONTENT',
    items: [
      { text: 'Thumbnails', href: '/dashboard/thumbnails', icon: <ThumbsUpDownIcon /> }
    ]
  }
];

const Menu = () => {
  const pathname = usePathname(); // Use usePathname hook to get current pathname
  const [activeMenuItem, setActiveMenuItem] = useState('');

  useEffect(() => {
    // Update activeMenuItem when the pathname changes
    setActiveMenuItem(pathname);
  }, [pathname]);

  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: '#fff',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
        height: '100vh',
        padding: 2,
        position: 'relative'
      }}
    >
      {/* Add company logo at the top */}
      <Box sx={{ margin: '16px 0', textAlign: 'center', top: 0, left: 0, right: 0 }}>
        <p>logo</p>
      </Box>

      <List>
        {menuItems.map((section, index) => (
          <React.Fragment key={index}>
            {section.heading && (
              <ListItem disabled>
                <ListItemText primary={section.heading} sx={{ color: 'black', fontWeight: 'bold' }} />
              </ListItem>
            )}
            {section.items.map((item, itemIndex) => (
              <Link href={item.href} key={itemIndex} passHref>
                <ListItem
                  button
                  sx={{
                    // seeting the left padding for menu items (i.e if it is not the Menu-heading)
                    pl: section.heading ? 4 : 0,
                    backgroundColor: activeMenuItem === item.href ? 'primary.main' : 'inherit',
                    color: activeMenuItem === item.href ? '#fff' : 'rgba(0, 0, 0, 0.54)', // Change text color to white when the link is active
                    borderRadius:2
                  }}
                  onClick={() => setActiveMenuItem(item.href)}
                >
                  {item.icon && <Box sx={{ marginRight: 2 }}>{item.icon}</Box>}
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
            {index < menuItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Divider />
        <List>
          <Link href="/dashboard/recycle-bin" passHref>
            <ListItem
              button
              sx={{
                backgroundColor: activeMenuItem === '/dashboard/recycle-bin' ? 'primary.main' : 'inherit',
                color: activeMenuItem ==='/dashboard/recycle-bin' ? '#fff' : 'rgba(0, 0, 0, 0.54)'
              }}
              onClick={() => setActiveMenuItem('/dashboard/recycle-bin')}
            >
              <DeleteIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Recycle Bin" />
            </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default Menu;
