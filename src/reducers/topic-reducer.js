import {FIND_TOPIC_FOR_LESSON, CREATE_TOPIC, DELETE_TOPIC, UPDATE_TOPIC} from "../actions/topic-actions";

const initialState = {
    topics: [

    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_TOPIC_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
            }
        case CREATE_TOPIC:
            const newState = {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
            return newState
        case DELETE_TOPIC:

            const newState1 = {
                topics: state.topics.filter(topic => {
                    if(topic._id === action.topicToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic => {
                    if(topic._id === action.topic._id) {
                        return action.topic
                    } else {
                        return topic
                    }
                })
            }
        default:
            return state
    }
}

export default topicReducer