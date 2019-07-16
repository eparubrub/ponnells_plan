import React, { Component } from 'react';

class App extends Component {
    render() {
      return (
        <div>
          <main>
            {this.props.children}
          </main>
        </div>
      );
    }
}
export default App;
