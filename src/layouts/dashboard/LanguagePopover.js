import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'pt-BR',
    label: 'Português',
    icon: '/static/icons/ic_flag_br.svg',
  },
  {
    value: 'en-US',
    label: 'English',
    icon: '/static/icons/ic_flag_eua.svg',
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const { i18n } = useTranslation()
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (language) => {
    i18n.changeLanguage(language)
    setOpen(false);
  };

  const selectedLanguage = i18n.language;

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
        <img src={LANGS.find( l => l.value === selectedLanguage).icon} alt={LANGS.find( l => l.value === selectedLanguage).label} />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem key={option.value} selected={option.value === selectedLanguage} onClick={() => handleClose(option.value)}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}
