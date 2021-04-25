import React, { Component } from 'react';
import SidebarOption from './SidebarOption/SidebarOption';
import { AcUnit,Home,Person } from '@material-ui/icons';
import classes from './Sidebar.module.css';

class Sidebar extends Component{
    render(){
        return(
            <div className={classes.Sidebar}>
                <AcUnit fontSize="large"/>
                <SidebarOption  active Icon = {Home} title = "Home" />
                <SidebarOption Icon = {Person} title = "Profile" />
            </div>
        )
    }
}

export default Sidebar;