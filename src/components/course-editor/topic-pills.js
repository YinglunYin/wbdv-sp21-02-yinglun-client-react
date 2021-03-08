import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import topicService from "../../services/topic-service";

const TopicPills = (
    {
        topics = [],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicsForLesson
    }) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams()

    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
            setLessonFlag(true)
        } else {
            setLessonFlag(false)
        }
    }, [lessonId])

    const [lessonFlag, setLessonFlag] = useState(false)

    return (
        lessonFlag &&

        <div className="row py-3">
            <ul className="nav nav-pills">
                {
                    topics.map(topic => {
                        let active = ""
                        let flag = "false"

                        if (topic._id === topicId){
                            active = "active"
                        }
                                   return (
                                       <li className="nav-item">
                                           <Link className={`nav-link ${active}`}
                                                 to={`/courses/editor/${layout}/${courseId}/${moduleId}/${lessonId}/${topic._id}`}>
                                               <EditableItem
                                                   deleteItem={deleteTopic}
                                                   updateItem={updateTopic}
                                                   // to={`/courses/${flag}/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                                   back={`/courses/editor/${layout}/${courseId}/${moduleId}/${lessonId}`}
                                                   item={topic}
                                               />
                                           </Link>
                                       </li>
                                   )
                               }
                    )
                }
                <a href="#" className="align-self-center px-3">
                    <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-1x"/>
                </a>
            </ul>
        </div>
    )
}

const stateToPropsMapper = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dispatchToPropsMapper = (dispatch) => {
    return {
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then((theTopics) => dispatch({
                                                  type: "FIND_TOPIC_FOR_LESSON",
                                                  topics: theTopics
                                              }))
        },
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then((theActualTopic) => dispatch({
                                                       type: "CREATE_TOPIC",
                                                       topic: theActualTopic
                                                   }))
        },
        deleteTopic: (item) => {
            topicService.deleteTopic(item._id)
                .then(status => dispatch({
                                             type: "DELETE_TOPIC",
                                             topicToDelete: item
                                         }))
        },
        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                                             type: "UPDATE_TOPIC",
                                             topic: topic
                                         }))
        }

    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(TopicPills)