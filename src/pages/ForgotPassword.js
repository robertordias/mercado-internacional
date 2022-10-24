import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
// sections
import { ForgotPasswordForm } from '../sections/auth/forgot-password';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ForgotPassword() {

  const { t } = useTranslation();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title={t('title')}>
      <RootStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              {t('forgotPassword.title')}
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>{t('forgotPassword.subtitle')}</Typography>

            {/* <AuthSocial /> */}

            <ForgotPasswordForm />

          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
