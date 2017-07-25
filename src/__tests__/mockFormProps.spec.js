// import noop from '../internal/noop';
import mockFormProps from '../mockFormProps';
import { keys } from './utils';


describe('mockFormProps()', () => {
  test('Should be get field props', () => {
    const props = mockFormProps();

    expect(keys(props)).toEqual([
      'values',
      'errors',
      'meta',
      'fields',
      'handlers',
    ]);

    expect(keys(props.meta)).toEqual([
      'valid',
      'invalid',
      'touched',
      'untouched',
      'dirty',
      'pristine',
      'validating',
    ]);

    expect(keys(props.fields)).toEqual([
      'get',
      'set',
      'remove',
      'push',
      'pop',
      'shift',
      'unshift',
      'swap',
      'move',
      'map',
      'forEach',
      'isValid',
      'isValidating',
    ]);

    expect(keys(props.handlers)).toEqual([
      'onSubmit',
      'onClear',
      'onReset',
    ]);
  });


  test('Should be override field props', () => {
    // todo
  });
});
