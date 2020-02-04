import React from "react";
import LessonListItem from "./LessonListItem";


const ModuleList = ({lessons}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map(lesson =>
                <LessonListItem
                    key={lesson._id}
                    lesson={lesson}/>
            )
        }
        <li className="nav-item">
            <button className="nav-link topic wbdv-topic-add-btn" style={{float: 'right'}}>+</button>
        </li>
    </ul>

export default ModuleList