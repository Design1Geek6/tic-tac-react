import React, { Component } from 'react'



class XPiece extends Component {
    constructor(){
        super()
            console.log('XPiece.constructor()')
    }

    componentWillMount(){
        console.log('XPiece.componentWillMount()')
    }

    render(){
        console.log('XPiece.render()')

        return(
            <div>
                test
            </div>
            
        )
    }
    componentDidMount(){
        console.log('XPiece.componentDidMount()')
    }
}

export default XPiece