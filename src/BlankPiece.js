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
                <div className="box a1">*1</div>
                <div className="box b2">*2</div>
                <div className="box c3">*3</div>
            </div>
            
        )
    }
    componentDidMount(){
        console.log('BlankPiece.componentDidMount()')
    }
}

export default BlankPiece