import React from "react";
import {LESSONS_TOPICS_API_URL,TOPICS_API_URL} from "../../common/constants";
import {connect} from "react-redux";
import TopicService, {updateTopic} from "../../services/TopicService"
import {Link} from "react-router-dom";


class TopicPills extends React.Component {
    componentDidMount() {
        //this.props.findAllTopics()
        this.props.findTopicsForLesson(this.props.lessonId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }
    state = {
        selectedTopicId: '',
        editingTopicId: '',
        topic: {
            title: '',
            id: ''
        }
    }
    render() {
        return (
            <ul className="nav nav-tabs">
                {
                    this.props.lessonId && this.props.topics && this.props.topics.map(topic =>
                        <li className={`nav-item`}
                            onClick={() => this.setState({
                                selectedTopicId: topic.id
                            })}
                            key={topic.id}>

                            <p className={`nav-link
                                            ${(this.state.editingTopicId === topic.id
                                || this.state.selectedTopicId === topic.id) ? 'active' : ''}`}>
                                {this.state.editingTopicId !== topic.id &&

                                <Link to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`}>
                                    {topic.title}{topic.id}
                                </Link>

                                }

                                {this.state.editingTopicId === topic.id &&
                                <input
                                    onChange={(e) => {
                                        topic.title = e.target.value
                                    }}
                                    defaultValue={this.state.topic.title}/>}
                                <button onClick={() => {
                                    this.props.updateTopic(this.state.topic)
                                        .then(() =>
                                            this.setState({
                                                editingTopicId: ''
                                            })
                                        )
                                }
                                }>
                                    Save
                                </button>
                                <button onClick={
                                    () => this.props.deleteTopic(topic.id)}>
                                    X
                                </button>
                                <button onClick={() => {
                                    this.setState({
                                        topic: topic,
                                        editingTopicId: topic.id
                                    })
                                }}>
                                    Edit
                                </button>
                            </p>
                        </li>)
                }
                <li className="nav-item">
                    <button onClick={() => this.props.addTopic(this.props.lessonId)}>+</button>
                </li>
            </ul>
        )
    }


}
const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
})
const dispatcherToPropertyMapper = (dispatcher) => ({
    findAllTopics: () =>
        fetch(TOPICS_API_URL)
            .then(response => response.json())
            .then(topics => dispatcher({
                type: "SET_TOPICS",
                topics: topics
            })),
    findTopicsForLesson: (lessonId) =>
        fetch(`https://wbdv-sp20-huigao-server-java.herokuapp.com/api/lessons/${lessonId}/topics`)
            .then(response => response.json())
            .then(topics => dispatcher({
                type: 'FIND_TOPICS_FOR_LESSON',
                topics: topics
            })),
    updateTopic: async (topic) => {
        const actualTopic = await updateTopic(topic)
        dispatcher({
            type: 'UPDATE_PILL',
            topic: actualTopic,
            topicId: actualTopic.id
        })
    },
    addTopic: (lessonId) =>
        fetch(`https://wbdv-sp20-huigao-server-java.herokuapp.com/api/lessons/${lessonId}/topics`, {
            method: 'POST',
            body: JSON.stringify({title: 'New Topic'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualTopic =>
                dispatcher({
                    type: 'CREATE_TOPIC',
                    topic: actualTopic
                })),
    deleteTopic: (topicId) =>
        TopicService.deleteTopic(topicId)
            .then(status =>
                dispatcher({
                    type: 'DELETE_TOPIC',
                    topicId: topicId
                })),

})
export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(TopicPills)