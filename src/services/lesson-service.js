const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001345399/modules"
const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/001345399/lessons"

// creates a new lesson instance for the module whose ID is moduleId
export const createLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {

        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }

    }).then(response => response.json())

// retrieves all lessons for course whose ID is moduleId
export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())


// updates one lesson whose ID is lessonId
export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSON_URL}/${lessonId}`, {

        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

// removes lesson whose ID is lessonId
export const deleteLesson = (lessonId) =>
    fetch(`${LESSON_URL}/${lessonId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

const api = {
    findLessonsForModule, createLesson,
    deleteLesson, updateLesson
};

export default api;


