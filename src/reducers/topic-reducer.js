const initialState = {
    topics: [
        // {_id: "123", title: "Topic 1"},
        // {_id: "1223", title: "Topic 2"}
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_TOPIC_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "CREATE_TOPIC":
            const newState = {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
            return newState
        case "DELETE_TOPIC":

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
        case "UPDATE_TOPIC":
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