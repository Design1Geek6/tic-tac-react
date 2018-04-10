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
            <div>
                <div className="box d4">*4</div>
                <div className="box e5">*5</div>
                <div className="box f6">*6</div>
            </div>
            
        )
    }
    componentDidMount(){
        console.log('OPiece.componentDidMount()')
    }
}

export default OPiece