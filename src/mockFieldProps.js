import noop from './internal/noop';

const mockFieldProps = (props = {}) => ({
  ...props,
  input: {
    name: 'mockField',
    value: null,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    ...(props.input || {}),
  },
  meta: {
    label: null,
    error: null,
    errors: [],
    valid: false,
    invalid: true,
    touched: false,
    untouched: true,
    dirty: false,
    pristine: true,
    validating: false,
    ...(props.meta || {}),
  },
});

export default mockFieldProps;
