import { TextField } from '@mui/material';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const FTextField = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      label={label}
      {...field}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...props}
    />
  );
};

FTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default FTextField;
