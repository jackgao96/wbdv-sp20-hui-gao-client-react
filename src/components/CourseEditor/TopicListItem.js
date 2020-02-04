import React from "react";

const TopicListItem = ({topic}) =>

    <li className="nav-item">
        <a className="nav-link topic wbdv-topic-pill" href="#">{topic.title}</a>
    </li>

export default TopicListItem