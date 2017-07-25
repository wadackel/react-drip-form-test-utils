/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { dripFormField } from 'react-drip-form';
import { mount } from 'enzyme';
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
      mount(
        <form>
          <Field name="foo" />
        </form>
      );
    }).toThrow();

    restore();
  });


  test('Should be render with mock context', () => {
    const context = mockContext();
    const element = (
      <form>
        <Field name="foo" />
      </form>
    );
    const wrapper = mount(element, { context });

    // console.log(wrapper.debug());
  });
});
