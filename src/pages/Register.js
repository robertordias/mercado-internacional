import { useTranslation } from 'react-i18next';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
// sections
import { RegisterForm } from '../sections/auth/register';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 600,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

// ----------------------------------------------------------------------

export default function Register() {
  
  const { t } = useTranslation();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title={t('title')}>
      <RootStyle>

        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              { t('registerUser.title')}
            </Typography>
          </Stack>
          <ContentStyle>
            <RegisterForm />
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
