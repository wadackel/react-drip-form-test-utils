const mockGroupProps = (props = {}) => ({
  ...props,
  meta: {
    name: 'mockGroup',
    value: null,
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

export default mockGroupProps;
