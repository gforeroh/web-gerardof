import React, { Component } from 'react';
import ComingSoon from './ComingSoon';
import '../assets/css/App.css';

class App extends Component {
  constructor ( ){
    super( )
    this.state = { mensaje: 'De nuevo aqui en colombia', contador: 0 }

  }

  render() {
    return (
      <div className="App">
        <ComingSoon />
      </div>
    );
  }
}

export default App;
