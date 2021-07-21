import React, { Component } from 'react';
import {SketchField, Tools} from 'react-sketch';

class SketchFieldDemo extends Component {
     render() {
        return (
            <SketchField width='100vw' 
                         height='100vh'
                         background = 'black' 
                         tool={Tools.Pencil} 
                         lineColor='white'
                         backgroundColor = 'black'
                         lineWidth={3}/>
        )
     }
}

export default SketchFieldDemo;