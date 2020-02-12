import React from "react";
import {LESSONS_TOPICS_API_URL,TOPICS_API_URL} from "../../common/constants";
import {connect} from "react-redux";
import TopicService, {updateTopic} from "../../services/TopicService"


class TopicPills extends React.Component {
    componentDidMount() {
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
            _id: ''
        }
    }
    render() {
        return (
            <ul className="nav nav-tabs">
                {
                    this.props.topics && this.props.topics.map(topic =>
                        <li className={`nav-item`}
                            onClick={() => this.setState({
                                selectedTopicId: topic._id
                            })}
                            key={topic._id}>

                            <a className={`nav-link
                                            ${(this.state.editingTopicId === topic._id
                                || this.state.selectedTopicId === topic._id) ? 'active' : ''}`}>
                                {this.state.editingTopicId !== topic._id &&
                                <span>{topic.title}</span>}
                                {this.state.editingTopicId === topic._id &&
                                <input
                                    onChange={(e) => {
                                        topic.title = e.target.value
                                        //const newTitle = e.target.value
                                        // this.setState(prevState => ({
                                        //     lesson: {
                                        //         ...prevState.lesson,
                                        //         title: newTitle
                                        //     }
                                        // }))
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
                                    () => this.props.deleteTopic(topic._id)}>
                                    X
                                </button>
                                <button onClick={() => {
                                    this.setState({
                                        topic: topic,
                                        editingTopicId: topic._id
                                    })
                                }}>
                                    Edit
                                </button>
                            </a>
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
    findTopicsForLesson: lessonId =>
        fetch(LESSONS_TOPICS_API_URL(lessonId))
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
            topicId: actualTopic._id
        })
    },
    addTopic: (lessonId) =>
        fetch(LESSONS_TOPICS_API_URL(lessonId), {
            method: 'POST',
            body: JSON.stringify({title: 'New Lesson'}),
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