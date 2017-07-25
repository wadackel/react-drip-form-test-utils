# react-drip-form-test-utils

[![Build Status](http://img.shields.io/travis/tsuyoshiwada/react-drip-form-test-utils.svg?style=flat-square)](https://travis-ci.org/tsuyoshiwada/react-drip-form-test-utils)
[![Codecov](https://img.shields.io/codecov/c/github/tsuyoshiwada/react-drip-form-test-utils.svg?style=flat-square)](https://codecov.io/gh/tsuyoshiwada/react-drip-form-test-utils)
[![npm version](https://img.shields.io/npm/v/react-drip-form-test-utils.svg?style=flat-square)](http://badge.fury.io/js/react-drip-form-test-utils)

> Provides useful utilities for testing react-drip-form.

Mainly provide mocks for testing components. Enjoy the testing for react-drip-form :coffee:


## Table of Contents


<!-- vim-markdown-toc Redcarpet -->
* [Installation](#installation)
* [API](#api)
  * [mockContext(context = {})](#mockcontext-context)
  * [mockFormProps(props = {})](#mockformprops-props)
  * [mockFieldProps(props = {})](#mockfieldprops-props)
  * [mockGroupProps(props = {})](#mockgroupprops-props)
* [Related projects](#related-projects)
* [Contribute](#contribute)
* [License](#license)

<!-- vim-markdown-toc -->




## Installation

You can install stable version at npm.

```bash
$ npm install --save-dev react-drip-form-test-utils
```




## API


### mockContext(context = {})

Create mock of Context provided by `dripForm()`.

```javascript
import { mockContext } from 'react-drip-form-test-utils';

const context = mockContext({
  originalContext: 'original',
  values: { foo: 'bar' },
  dirties: ['foo'],
});

expect(context).toEqual({
  originalContext: 'original', // add context
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
  validating: [],
  values: { foo: 'bar' }, // override
  errors: {},
  touches: [],
  dirties: ['foo'], // override
});
```


### mockFormProps(props = {})

Create a Props mock that is provided when wrapping a component with `dripForm()`.  
I'ts useful for `handlers` testing etc.

```javascript
import { mockFormProps } from 'react-drip-form-test-utils';

const onSubmit = jest.fn();

const props = mockFormProps({
  customProp: 'foo',
  values: { bar: 'baz' },
  meta: {
    touched: true,
    untouched: false,
  },
  handlers: {
    onSubmit,
  },
});

expect(props).toEqual({
  customProp: 'foo', // add props
  values: { bar: 'baz' }, // override
  errors: {},
  meta: {
    valid: false,
    invalid: true,
    touched: true, // override
    untouched: false, // override
    dirty: false,
    pristine: true,
    validating: false,
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
  },
  handlers: {
    onSubmit: onSubmit, // jest mock
    onClear: noop,
    onReset: noop,
  },
});
```


### mockFieldProps(props = {})

Create a Props mock that is provided when wrapping a component with `dripFormField()`.

```javascript
import { mockFieldProps } from 'react-drip-form-test-utils';

const onChange = jest.fn();

const props = mockFieldProps({
  customProp: 'foo',
  input: {
    onChange,
  },
  meta: {
    error: 'Error!!',
  },
});

expect(props).toEqual({
  customProp: 'foo', // add props
  input: {
    name: 'mockField',
    value: null,
    onChange: onChange, // jest mock
    onFocus: noop,
    onBlur: noop,
  },
  meta: {
    label: null,
    error: 'Error!!', // override
    errors: [],
    valid: false,
    invalid: true,
    touched: false,
    untouched: true,
    dirty: false,
    pristine: true,
    validating: false,
  },
});
```


### mockGroupProps(props = {})

Create a Props mock that is provided when wrapping a component with `dripFormGroup()`.

```javascript
import { mockGroupProps } from 'react-drip-form-test-utils';

const props = mockGroupProps({
  customProp: true,
  meta: {
    label: 'Foo',
    valid: true,
    invalid: false,
  },
});

expect(props).toEqual({
  customProp: true, // add props
  meta: {
    name: 'mockGroup',
    value: null,
    label: 'Foo', // override
    error: null,
    errors: [],
    valid: true, // override
    invalid: false, // override
    touched: false,
    untouched: true,
    dirty: false,
    pristine: true,
    validating: false,
    ...(props.meta || {}),
  },
});
```


## Related projects

* [tsuyoshiwada/react-drip-form](https://github.com/tsuyoshiwada/react-drip-form)




## Contribute

1. Fork it!
1. Create your feature branch: git checkout -b my-new-feature
1. Commit your changes: git commit -am 'Add some feature'
1. Push to the branch: git push origin my-new-feature
1. Submit a pull request :D

Bugs, feature requests and comments are more than welcome in the [issues](https://github.com/tsuyoshiwada/react-drip-form-test-utils/issues).




## License

[MIT © tsuyoshiwada](./LICENSE)

