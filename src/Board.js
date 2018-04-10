import React, { Component } from 'react'
import BlankPiece from './BlankPiece'
import OPiece from './OPiece'
import XPiece from './XPiece'


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
                <div className ='body'>
                <header className ='header'>
                    <h1>Tic Tac Toe</h1>
                </header>
                </div>
                <div className = 'board'></div>
                <BlankPiece /> <OPiece /> <XPiece />
            </div>
            
        )
    }
    componentDidMount(){
        console.log('Board.componentDidMount()')
    }
}

export default Board