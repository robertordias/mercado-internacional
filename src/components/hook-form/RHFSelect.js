import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { InputLabel, MenuItem, Select } from '@mui/material';

// ----------------------------------------------------------------------

RHFSelect.propTypes = {
  name: PropTypes.string,
};

export default function RHFSelect({ optionList, name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
        <InputLabel id="demo-simple-select-label">Perfil</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          {...other}
        >
         {
            optionList?.map( (x,y) => 
            <MenuItem  key={y} value={x?.id}> {x?.name}</MenuItem > )
         }
        </Select>
        </>
      )}
    />
  );
}
