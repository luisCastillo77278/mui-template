import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const FSelect = ({ name, label, options, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} label={label} {...props}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error ? (
        <FormHelperText>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

FSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
};

export default FSelect;
