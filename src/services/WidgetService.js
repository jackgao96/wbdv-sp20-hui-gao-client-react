import {deleteLesson} from "./LessonService";

export const findWidgetsForTopic = async (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/topics/${topicId}/widgets`)
        .then(response => response.json())

//https://localhost:8080/api/topics/${topicd}/widgets/


export const updateWidget = (wid, widget) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())

export const findAllWidgets = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/huigao1/widgets")
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/widgets/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())

export const createWidget = (tid, widget) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/huigao1/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    })
        .then(response => response.json())