import React from "react";

const ModuleListItem = ({module}) =>
    <li className="list-group-item wbdv-module-item">
        <a href="#" className="wbdv-module-item-title"> {module.title} </a>
        <input type="button" name="" id="modDel" value="delete"
               className="float-right wbdv-module-item-delete-btn"/>
    </li>

export default ModuleListItem

