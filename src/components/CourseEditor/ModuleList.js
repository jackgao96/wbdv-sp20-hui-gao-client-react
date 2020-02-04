import React from "react";
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules}) =>
    <ul className="list-group wbdv-module-list">
        {
            modules.map(module =>
                <ModuleListItem
                    key={module._id}
                    module={module}/>
            )
        }
        <li className="nav-item">
            <button className="nav-link topic wbdv-topic-add-btn" style={{float: 'right'}}>+</button>
        </li>
    </ul>

export default ModuleList