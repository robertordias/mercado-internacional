import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../auth';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function LoginForm() {

  
  const context = useAuth();
  
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email(t('login.form.invalidEmail')).required(t('login.form.emptyEmail')),
    password: Yup.string().required(t('login.form.emptyPassword')),
  });

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {  handleSubmit, formState: { isSubmitting }, } = methods;

  const onSubmit = async (login) => {
    context.Login({username: login.email, password: login.password});
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label={t('login.form.email')} />

        <RHFTextField
          name="password"
          label={t('login.form.password')}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <RHFCheckbox name="remember" label="Remember me" /> */}
        <Link variant="subtitle2" underline="hover" component={RouterLink} to="/forgot-password" >
          {t('login.form.forgotPassword')}
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
      {t('login.form.button')}
      </LoadingButton>
    </FormProvider>
  );
}
