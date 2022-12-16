import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { InputLabel, MenuItem, Select } from '@mui/material';

// ----------------------------------------------------------------------

RHFSelect.propTypes = {
  name: PropTypes.string,
};

export default function RHFSelect({ optionList, name, defaultValue, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          {...field}
          fullWidth
          value={ field.value == undefined ? defaultValue : field.value}
          {...other}
        >
         {
            optionList?.map( (x,y) => 
            <MenuItem selected={x?.name === 'USER'} key={y} value={x?.value}> {x?.name}</MenuItem > )
         }
        </Select>
        </>
      )}
    />
  );
}
