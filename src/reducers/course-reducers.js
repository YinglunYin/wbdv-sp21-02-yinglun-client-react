import {FIND_COURSE_BY_ID} from "../actions/course_actions";

const initialState = {
    course: {

    }

}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_COURSE_BY_ID:
            return {
                course: action.course
            }
        default:
            return state
    }
}

export default courseReducer