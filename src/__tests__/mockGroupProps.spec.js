import mockGroupProps from '../mockGroupProps';
import { keys } from './utils';


describe('mockGroupProps()', () => {
  test('Should be get group props', () => {
    const props = mockGroupProps();

    expect(keys(props)).toEqual([
      'meta',
    ]);

    expect(keys(props.meta)).toEqual([
      'name',
      'value',
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


  test('Should be override group props', () => {
    expect(mockGroupProps({
      meta: {
        valid: true,
      },
    }).meta.valid).toBe(true);
  });
});
