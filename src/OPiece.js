import React, { Component } from 'react'



class OPiece extends Component {
    constructor(){
        super()
            console.log('OPiece.constructor()')
    }

    componentWillMount(){
        console.log('OPiece.componentWillMount()')
    }

    render(){
        console.log('OPiece.render()')

        return(
                <div>O</div>
        )
    }
    componentDidMount(){
        console.log('OPiece.componentDidMount()')
    }
}

export default OPiece