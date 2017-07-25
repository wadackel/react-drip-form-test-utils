import noop from './internal/noop';

const mockContext = (context = {}) => ({
  dripForm: true,
  group: null,
  register: noop,
  unregister: noop,
  updateValue: noop,
  updateTouched: noop,
  updateDirty: noop,
  updateValidations: noop,
  updateNormalizers: noop,
  updateMessages: noop,
  updateLabel: noop,
  validating: false,
  values: {},
  errors: {},
  touches: [],
  dirties: [],
  ...context,
});

export default mockContext;
