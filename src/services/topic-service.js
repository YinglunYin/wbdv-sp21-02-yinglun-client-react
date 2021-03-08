const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/001345399/lessons"
const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/001345399/topics"

// creates a new topic instance for the lesson whose ID is lessonId
export const createTopic = (lessonId, topic) =>
    fetch(`${LESSON_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

//retrieves all topics for lesson whose ID is lessonId
export const findTopicsForLesson = (lessonId) =>

    fetch(`${LESSON_URL}/${lessonId}/topics`)
        .then(response => response.json())


// updates one topic whose ID is topicId
export const updateTopic = (topicId, topic) =>

    fetch(`${TOPIC_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

// removes topic whose ID is topicId
export const deleteTopic = (topicId) =>

    fetch(`${TOPIC_URL}/${topicId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

const api={
    createTopic, findTopicsForLesson, updateTopic, deleteTopic
}

export default api;
