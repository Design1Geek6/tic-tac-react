import React from 'react'
import App from '../App.js'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Kitchen from '../Board'

it('Should Shallow Render App Correctly', () =>{
    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    const result = renderer.getRenderOutput()

   // console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        <Board />
    )
})