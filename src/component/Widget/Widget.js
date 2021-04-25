import React, { Component } from 'react';
import classes from './Widget.module.css'

class Widget extends Component{
    render(){
        return(
            <div className = {classes.Widget}>
                <h3>Widget</h3>
            </div>
        )
    }
}

export default Widget;