import React from 'react'
import App from '../App.js'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Board from '../Board'

it( 'shallow render board correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    const result = renderer.getRenderOutput()

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        <Board />
    )
})
