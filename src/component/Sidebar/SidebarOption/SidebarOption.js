import React from 'react';
import './SidebarOption.css';

function SidebarOption( {active, title, Icon} ){
        return(
            <div className = {`SidebarOption ${active && `SidebarOption__active`}`}>
                <Icon />
                <h2>{title}</h2>
            </div>
        )
}


export default SidebarOption;