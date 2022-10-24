import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function ForgotPasswordForm() {
  
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const EmailSchema = Yup.object().shape({
    email: Yup.string().email(t('login.form.invalidEmail')).required(t('login.form.emptyEmail')),
  });

  const defaultValues = {
    email: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(EmailSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    console.log('passou')
    navigate('/reset-password', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label={t('forgotPassword.form.email')} />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        {t('forgotPassword.form.button')}
      </LoadingButton>
    </FormProvider>
  );
}
