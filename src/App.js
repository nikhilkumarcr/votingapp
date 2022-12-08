import React, { Component } from 'react';
import VotingBox from './component/VotingBox'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='display-1'>Thinking in React</div>
        <hr />
        <VotingBox items={[
          "java",
          "react",
          "angular",
        ]} />
      </div>
    );
  }
}

export default App; 