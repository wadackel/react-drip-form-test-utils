/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { dripFormField } from 'react-drip-form';
import { shallow } from 'enzyme';
import noop from '../internal/noop';
import mockContext from '../mockContext';
import { silentError } from './utils';

const Field = dripFormField()(() => <div />);


describe('mockContext()', () => {
  test('Should be throw error without context', () => {
    const { restore } = silentError();

    expect(() => {
      shallow(<Field name="foo" />);
    }).toThrow();

    restore();
  });


  test('Should be render with mock context', () => {
    shallow(<Field name="foo" />, { context: mockContext() });
  });


  test('Should be override context properties', () => {
    const register = () => {};

    expect(mockContext().register).toBe(noop);
    expect(mockContext({ register }).register).toBe(register);

    expect(mockContext({ touches: ['foo', 'bar'] }).touches).toEqual(['foo', 'bar']);
  });
});
