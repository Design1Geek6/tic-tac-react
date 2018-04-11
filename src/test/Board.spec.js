import React from 'react'
import Board from '../Board'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import BlankPiece from '../BlankPiece'
import OPiece from '../OPiece'
import XPiece from '../XPiece'

// it('renders correctly', () => {
//     const tree = Renderer
//     .create(<Board />)
//     .toJSON()
//     expect(tree).toMatchSnapshot()
// })

it( 'shallow render board correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Board />)
    const result = renderer.getRenderOutput()

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual([
        <div className ='body'>
            <header className ='header'>
                <h1>Tic Tac Toe</h1>
            </header>
        </div>,
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
    ])
})
