import noop from './internal/noop';

const mockFormProps = (props = {}) => ({
  values: {},
  errors: {},
  ...props,
  meta: {
    valid: false,
    invalid: true,
    touched: false,
    untouched: true,
    dirty: false,
    pristine: true,
    validating: false,
    ...(props.meta || {}),
  },
  fields: {
    get: noop,
    set: noop,
    remove: noop,
    push: noop,
    pop: noop,
    shift: noop,
    unshift: noop,
    swap: noop,
    move: noop,
    map: noop,
    forEach: noop,
    isValid: noop,
    isValidating: noop,
    ...(props.fields || {}),
  },
  handlers: {
    onSubmit: noop,
    onClear: noop,
    onReset: noop,
    ...(props.handlers || {}),
  },
});

export default mockFormProps;
