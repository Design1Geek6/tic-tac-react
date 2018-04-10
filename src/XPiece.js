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
                <div className="box g7">*7</div>
                <div className="box h8">*8</div>
                <div className="box i9">*9</div>
            </div>
            
        )
    }
    componentDidMount(){
        console.log('XPiece.componentDidMount()')
    }
}

export default XPiece