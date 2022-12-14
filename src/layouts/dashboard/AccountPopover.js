import { useRef, useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
// components
import MenuPopover from '../../components/MenuPopover';
// mocks_
import account from '../../_mock/account';
import { useAuth } from 'src/sections/auth/auth';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function AccountPopover() {

  const context = useAuth();
  
  const [ user, setUser ] = useState({});
  
  const { t } = useTranslation();

  const navigate = useNavigate();

  const MENU_OPTIONS = [
    {
      label: t('nav.buttons.profile'),
      icon: 'eva:person-fill',
      linkTo: '#',
    },
    {
      label: t('nav.buttons.settings'),
      icon: 'eva:settings-2-fill',
      linkTo: '#',
    },
  ];

  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const logout = () => {
    context.Logout();
  }

  useEffect(() => {
    const loginUser = localStorage.getItem('user');
    if(loginUser){
      setUser(JSON.parse(loginUser));
    }

  }, []);


  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user.username}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {/* <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} /> */}

        <MenuItem onClick={logout} sx={{ m: 1 }}>
          {t('nav.buttons.logout')}
        </MenuItem>
      </MenuPopover>
    </>
  );
}
