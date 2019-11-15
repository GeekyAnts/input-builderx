import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InputX from '../.';

export default class App extends React.Component<{}, { val: any }> {
  constructor(props: any) {
    super(props);
    this.state = { val: 76 };
  }
  render() {
    return (
      <div>
        Current Value = {this.state.val}
        <br />
        <br />
        Native Input:{' '}
        <input
          value={this.state.val}
          onChange={(e: any) => this.setState({ val: e.target.value })}
        />
        <br />
        Validator Input (Native API):{' '}
        <InputX
          value={this.state.val}
          onChange={(e: any) => this.setState({ val: e.target.value })}
        />
        <br />
        Validator Input (with validator):{' '}
        <InputX
          value={this.state.val}
          onChange={(e: any) => this.setState({ val: e.target.value })}
          validator={e => e.target.value % 2 == 0}
        />
        <br />
        Validator Input (with validator & inputProcessor):{' '}
        <InputX
          value={this.state.val}
          onChange={(e: any) => this.setState({ val: e.target.value })}
          inputProcessor={e => Math.round(e.target.value / 10) * 10}
        />
        <br />
        Validator Input (with validator & outputProcessor):{' '}
        <InputX
          value={this.state.val}
          onChange={(e: any) => this.setState({ val: e.target.value })}
          // validator={e => e.target.value % 2 == 0}
          outputProcessor={e => Math.round(e.target.value / 10) * 10}
        />
        <br />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
