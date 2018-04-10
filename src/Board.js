import React, { Component } from 'react'


class Board extends Component {
    constructor(){
        super()
            console.log('Board.constructor()')
    }

    componentWillMount(){
        console.log('Board.componentWillMount()')
    }

    render(){
        console.log('Board.render()')

        return(
            <div>
            <header>
                <h1></h1>
            </header>
            
        </div>
        )
    }
    componentDidMount(){
        console.log('Board.componentDidMount()')
    }
}

export default Board