import {TOPICS_API_URL, LESSONS_TOPICS_API_URL} from "../common/constants";

export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/module/${lessonId}/topics`)
        .then(response => response.json())

export const createTopic = (lessonId, topic) =>
    fetch(LESSONS_TOPICS_API_URL(lessonId), {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const updateTopic = async (topic) =>
{
    const response = await fetch(`${TOPICS_API_URL}/${topic._id}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}
export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export default {
    findTopicsForLesson,
    createTopic,
    updateTopic,
    deleteTopic
}