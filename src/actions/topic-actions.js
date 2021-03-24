import topicService from "../services/topic-service";

export const FIND_TOPIC_FOR_LESSON = "FIND_TOPIC_FOR_LESSON"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"

export const findTopicsForLesson = (dispatch, lessonId) => {
    topicService.findTopicsForLesson(lessonId)
        .then((theTopics) => dispatch({
                                          type: FIND_TOPIC_FOR_LESSON,
                                          topics: theTopics
                                      }))
}
export const createTopic = (dispatch, lessonId) => {
    topicService.createTopic(lessonId, {title: "New Topic"})
        .then((theActualTopic) => dispatch({
                                               type: CREATE_TOPIC,
                                               topic: theActualTopic
                                           }))
}
export const deleteTopic = (dispatch, item) => {
    topicService.deleteTopic(item._id)
        .then(status => dispatch({
                                     type: DELETE_TOPIC,
                                     topicToDelete: item
                                 }))
}
export const updateTopic = (dispatch, topic) => {
    topicService.updateTopic(topic._id, topic)
        .then(status => dispatch({
                                     type: UPDATE_TOPIC,
                                     topic: topic
                                 }))
}

const topicActions={
    findTopicsForLesson, createTopic, deleteTopic, updateTopic
}

export default topicActions