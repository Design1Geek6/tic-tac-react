import React, { Component } from 'react'



class BlankPiece extends Component {
    constructor(){
        super()
            console.log('BlankPiece.constructor()')
    }

    componentWillMount(){
        console.log('BlankPiece.componentWillMount()')
    }

    render(){
        console.log('BlankPiece.render()')

        return(
            <div>
                test
            </div>
            
        )
    }
    componentDidMount(){
        console.log('BlankPiece.componentDidMount()')
    }
}

export default BlankPiece