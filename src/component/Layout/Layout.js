import React, { Component } from 'react';
import classes from './Layout.module.css';
import Sidebar from './../Sidebar/Sidebar'
import Feed from './../Feed/Feed';
import Widget from './../Widget/Widget';


class Layout extends Component{
      render(){

            return(
                  <div className= {classes.Layout}>
                        <Sidebar />
                        <Feed />
                        <Widget />
                  </div>
            )
      }
}

export default Layout;