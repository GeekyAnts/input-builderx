# InputX

## Overview

Enhanced html input with validation, data input and output processing.

## Installation

```
yarn add input-builderx
```

_or_

```
npm install input-builderx --save
```

## Usage

Import the React component

```js
import { InputX } from 'input-builderx';
```

```js
<InputX
  value={this.state.val}
  onChange={(e: any) => this.setState({ val: e.target.value })}
  validator={e => e.target.value % 2 == 0}
  inputProcessor={e => Math.round(e.target.value / 10) * 10}
  outputProcessor={e => Math.round(e.target.value / 10) * 10}
/>
```

## API

| Event           | Description                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| validator       | `function`.Optional. Checks the validity of the user input. If it returns true then the `onChange` function is called. |
| inputProcessor  | `function`.Optional. Processor function for the `value` prop.                                                          |
| outputProcessor | `function`. Optional. Processor function for the user input values.                                                    |

## License

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
