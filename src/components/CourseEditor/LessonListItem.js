import React from "react";

const LessonListItem = ({lesson}) =>
    <li className="list-group-item wbdv-module-item">

        <a href="#" className="nav-link lesson wbdv-page-tab">{lesson.title}</a>
    </li>

export default LessonListItem