import noop from '../internal/noop';
import mockFieldProps from '../mockFieldProps';
import { keys } from './utils';


describe('mockFieldProps()', () => {
  test('Should be get field props', () => {
    const props = mockFieldProps();

    expect(keys(props)).toEqual([
      'input',
      'meta',
    ]);

    expect(keys(props.input)).toEqual([
      'name',
      'value',
      'onChange',
      'onFocus',
      'onBlur',
    ]);

    expect(keys(props.meta)).toEqual([
      'label',
      'error',
      'errors',
      'valid',
      'invalid',
      'touched',
      'untouched',
      'dirty',
      'pristine',
      'validating',
    ]);
  });


  test('Should be override field props', () => {
    expect(mockFieldProps({
      input: {
        name: 'mockname',
        value: 1000,
      },
    }).input).toEqual({
      name: 'mockname',
      value: 1000,
      onChange: noop,
      onFocus: noop,
      onBlur: noop,
    });

    expect(mockFieldProps({
      meta: {
        label: 'Foo',
        valid: true,
        invalid: false,
      },
    }).meta).toEqual({
      label: 'Foo',
      error: null,
      errors: [],
      valid: true,
      invalid: false,
      touched: false,
      untouched: true,
      dirty: false,
      pristine: true,
      validating: false,
    });
  });
});
