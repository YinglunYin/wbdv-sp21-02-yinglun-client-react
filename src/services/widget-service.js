const TOPIC_URL = "https://wbdv-sp21-02-yinglunyin-server.herokuapp.com/api/topics"
const WIDGET_URL = "https://wbdv-sp21-02-yinglunyin-server.herokuapp.com/api/widgets"
// const TOPIC_URL = "http://localhost:8080/api/topics"
// const WIDGET_URL = "http://localhost:8080/api/widgets"

export const createWidget = (tId, widget) =>
    fetch(`${TOPIC_URL}/${tId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const findWidgetForTopic = (tId) =>
    fetch(`${TOPIC_URL}/${tId}/widgets`)
        .then(response => response.json());

export const findAllWidgets = (tId) =>
    fetch(`${WIDGET_URL}`)
        .then(response => response.json());

export const updateWidget = (wId, widget) =>
    fetch(`${WIDGET_URL}/${wId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const deleteWidget = (wId) =>
    fetch(`${WIDGET_URL}/${wId}`, {
        method: "DELETE",
    }).then(response => response.json());

const api ={
    createWidget, findWidgetForTopic, updateWidget, deleteWidget, findAllWidgets
}

export default api;
