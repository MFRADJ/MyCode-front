import React from 'react'
import './Admin.css'
import { SidebarData } from './SidebarData'
function Admin() {
  return (
    <div className='App Sidebar'>
        <ul className='SidebarList'>
    {SidebarData.map((val,key)=>{
        return(
        <li key={key}
         className='row'
         id={window.location.pathname == val.Link ? "active" : ""}
         onClick={()=> {window.location.pathname=val.Link}}>
            <div id='icon'>{val.icon}</div><div id='title'> {val.title}</div>


   
               
        </li>
        );
        
    })}

    </ul> 
    </div>
  );
}

export default Admin