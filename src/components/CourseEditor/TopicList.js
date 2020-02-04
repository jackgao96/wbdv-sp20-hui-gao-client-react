import React from "react";
import TopicListItem from "./TopicListItem";


const TopicList = ({topics}) =>
    <ul className="nav nav-tabs">
        {
            topics.map(topic =>
                <TopicListItem
                    key={topic._id}
                    topic={topic}/>
            )
        }
        <li className="nav-item">
            <button className="nav-link topic wbdv-topic-add-btn" style={{float: 'right'}}>+</button>
        </li>
    </ul>

export default TopicList