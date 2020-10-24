import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import "./SidebarRow.css";
const SidebarRow = (props) => {
    // with es6 object destructuring we can write {title} instead of props
    return (
        <>
            {/* (if this part is true) && (this part will execute) or
        if(condition){
   (this part will execute)
} */}
            <div className={`sidebarRow ${props.selected && "selected"}`}>
                {/* Now same icons are showing to show different icons we pass it as a prop */}
                <props.Icon className="sidebarR_icon" />
                <h1 className="sidebarR_title">{props.title} </h1>
            </div>
        </>
    );
};



export default SidebarRow;
