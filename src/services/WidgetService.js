export const findWidgetsForTopic = (topicd) =>
    fetch(`https://wbdv-sp20-huigao-server-java.herokuapp.com/api/topics/${topicd}/widgets/`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`https://wbdv-sp20-huigao-server-java.herokuapp.com/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())

export const findAllWidgets = () =>
    fetch("https://wbdv-sp20-huigao-server-java.herokuapp.com/api/widgets")
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`https://wbdv-sp20-huigao-server-java.herokuapp.com/api/widgets/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())

export const createWidget = (widget) =>
    fetch("https://wbdv-sp20-huigao-server-java.herokuapp.com/api/widgets", {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': "application/json"
        }
    })
        .then(response => response.json())