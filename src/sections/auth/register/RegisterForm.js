import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFSelect } from '../../../components/hook-form';
import { createUser } from 'src/services/users';

// ----------------------------------------------------------------------

export default function RegisterForm() {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrgatório'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    });

  const defaultValues = {
    name: '',
    email: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (user) => {
    user.role = [user.role];
    await createUser(user);
    navigate('/users', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={5}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack> */}

        <RHFTextField name="name" label={ t('registerUser.form.name') } />
        <RHFTextField name="email" label={ t('registerUser.form.email') } />

        {/* <RHFTextField
          name="password"
          label={ t('registerUser.form.password') }
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label={ t('registerUser.form.confirmPassword') }
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}

        <RHFSelect 
          name="role"
          defaultValue='user'
          label={ t('registerUser.form.profile') }
          optionList={[
            { value: 'user', name: t('registerUser.form.profileValues.user') },
            { value: 'admin', name: t('registerUser.form.profileValues.admin') }
          ]}
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          {t('registerUser.form.register')}
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
