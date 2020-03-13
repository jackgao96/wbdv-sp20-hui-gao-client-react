const initialState ={
    topics: [ ]
}
const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOPICS":
            return {
                topics: action.topics
            }
        case 'CREATE_TOPIC':
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case 'DELETE_TOPIC':
            return {
                topics: state.topics.filter(
                    topic => topic.id !== action.topicId)
            }

        case 'UPDATE_TOPIC':
            return {
                topics: state.topics.map(topic =>
                    topic.id === action.topicId ? action.topic : topic
                )
            }

        case 'FIND_TOPICS_FOR_LESSON':
            return {
                topics: action.topics
            }
        case 'FIND_ALL_TOPICS':
            return {
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer