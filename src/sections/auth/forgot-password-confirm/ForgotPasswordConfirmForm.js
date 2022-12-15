import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { changePassword } from 'src/services/users';

// ----------------------------------------------------------------------

export default function ForgotPasswordConfirmForm() {
  
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const PasswordSchema = Yup.object().shape({
    password: Yup.string().required(t('login.form.emptyPassword')).min(4, 'Mínimo 4 caracteres'),
    repeatPassword: Yup.string().required(t('forgotPasswordConfirm.form.emptyConfirmPassword')).oneOf([Yup.ref('password'), null], 'As senhas devem corresponder').min(4, 'Mínimo 4 caracteres'),
  });

  const defaultValues = {
    password: '',
    repeatPassword: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(PasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (passwords) => {
    await changePassword(passwords);
    navigate('/login', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
      <RHFTextField
          name="password"
          label={t('forgotPasswordConfirm.form.password')}
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

      <RHFTextField
          name="repeatPassword"
          label={t('forgotPasswordConfirm.form.confirmPassword')}
          type={showConfirmPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                  <Iconify icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        {t('forgotPassword.form.button')}
      </LoadingButton>
    </FormProvider>
  );
}
