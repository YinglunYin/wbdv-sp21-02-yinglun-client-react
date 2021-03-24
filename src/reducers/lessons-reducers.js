import {FIND_LESSON_FOR_MODULE, CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON} from "../actions/lesson-actions";

const initialState = {
    lessons: [
        // {_id: "123", title: "Lesson A"},
        // {_id: "1223", title: "Lesson B"}
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_LESSON_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons
            }
        case CREATE_LESSON:
            const newState = {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
            return newState
        case DELETE_LESSON:

            const newState1 = {
                lessons: state.lessons.filter(lesson => {
                    if (lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return lesson
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer