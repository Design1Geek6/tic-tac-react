import React, { Component } from 'react';
import Board from './Board'

class App extends Component {
  constructor(){
    super()
    console.log('App.constructor()')
  }

  componentWillMount(){
      console.log('App.componentWillMount()')
  }

  render(){
    console.log('App.render()')

    return(
      <div>
        <Board />
      </div>
    )
  }

  componentDidMount(){
    console.log('App.componentDidMount()')
  }
}

export default App;
