import React, { Component } from 'react'
import './Game.css'
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
                <div className = 'board'>
                    <div class="box a"><OPiece /></div>
                    <div class="box b"><BlankPiece /></div>
                    <div class="box c"><XPiece /></div>
                    <div class="box d"><BlankPiece /></div>
                    <div class="box e"><OPiece /></div>
                    <div class="box f"><BlankPiece /></div>
                    <div class="box g"><XPiece /></div>
                    <div class="box h"><BlankPiece /></div>
                    <div class="box i"><XPiece /></div>
                  
                </div>
            </div>
            
        )
    }
    componentDidMount(){
        console.log('Board.componentDidMount()')
    }
}

export default Board