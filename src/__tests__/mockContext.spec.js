/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { dripFormField } from 'react-drip-form';
import { shallow } from 'enzyme';
import noop from '../internal/noop';
import mockContext from '../mockContext';

const Field = dripFormField()(() => <div />);
const silentError = () => {
  const original = console.error;
  const error = jest.fn();

  console.error = error;

  return {
    error,
    restore: () => {
      console.error = original;
    },
  };
};


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
