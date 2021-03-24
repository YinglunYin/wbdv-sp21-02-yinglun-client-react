//
//
// // creates a new module instance for the course whose ID is courseId
// export const createModule = (courseId, module) =>
//
// // retrieves all modules for course whose ID is courseId
// export const findModulesForCourse = (courseId) =>
//
// // retrieves one module whose ID is moduleId (optional)
// export const findModule = (moduleId) =>
//
// // updates one module whose ID is moduleId
// export const updateModule = (moduleId, module) =>
//
// // removes module whose ID is moduleId
// export const deleteModule = (moduleId) =>
//
//

const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001345399/courses";
const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001345399/modules";

export const createModule = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    findModulesForCourse, createModule,
    deleteModule, updateModule
};

export default api;