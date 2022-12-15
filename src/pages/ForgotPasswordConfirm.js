import { Link as RouterLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
// @mui
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
// sections
import { ForgotPasswordConfirmForm } from '../sections/auth/forgot-password-confirm';
import api from 'src/services/api';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
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

export default function ForgotPasswordConfirm() {
  
  const { token } = useParams();

  api.defaults.headers.Authorization = `Bearer ${token}`;

  const { t } = useTranslation();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title={t('title')}>
      <RootStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              {t('forgotPasswordConfirm.title')}
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 5 }}>{t('forgotPasswordConfirm.subtitle')}</Typography>

            {/* <AuthSocial /> */}

            <ForgotPasswordConfirmForm />

          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
