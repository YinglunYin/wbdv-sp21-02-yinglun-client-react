import lessonService from "../services/lesson-service";

export const FIND_LESSON_FOR_MODULE = "FIND_LESSON_FOR_MODULE"
export const CREATE_LESSON = "CREATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"

export const findLessonsForModule = (dispatch, moduleId) => {
    lessonService.findLessonsForModule(moduleId)
        .then((theLessons) => dispatch({
                                           type: FIND_LESSON_FOR_MODULE,
                                           lessons: theLessons
                                       }))
}
export const createLesson = (dispatch, moduleId) => {
    lessonService.createLesson(moduleId, {title: "New Lesson"})
        .then((theActuallLesson) => dispatch({
                                                 type: CREATE_LESSON,
                                                 lesson: theActuallLesson
                                             }))
}
export const deleteLesson = (dispatch, item) => {
    lessonService.deleteLesson(item._id)
        .then(status => dispatch({
                                     type: DELETE_LESSON,
                                     lessonToDelete: item
                                 }))
}
export const updateLesson = (dispatch, lesson) => {
    lessonService.updateLesson(lesson._id, lesson)
        .then(status => dispatch({
                                     type: UPDATE_LESSON,
                                     lesson: lesson
                                 }))
}

const lessonActions = {
    findLessonsForModule, createLesson, deleteLesson, updateLesson
}

export default lessonActions