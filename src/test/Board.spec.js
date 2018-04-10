import React from 'react'
import Board from '../Board'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'

// it('renders correctly', () => {
//     const tree = Renderer
//     .create(<Kitchen />)
//     .toJSON()
//     expect(tree).toMatchSnapshot()
// })

it( 'shallow render board correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Board />)
    const result = renderer.getRenderOutput()

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        <header>
            <h1></h1>
        </header>
    )
})
