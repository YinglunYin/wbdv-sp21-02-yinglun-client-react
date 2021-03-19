import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import topicService from "../../services/topic-service";
import topicActions from "../../actions/topic-actions";

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
                                                 to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                                               <EditableItem
                                                   deleteItem={deleteTopic}
                                                   updateItem={updateTopic}
                                                   // to={`/courses/${flag}/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                                   back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}`}
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
            topicActions.findTopicsForLesson(dispatch, lessonId)
        },
        createTopic: (lessonId) => {
            topicActions.createTopic(dispatch, lessonId)
        },
        deleteTopic: (item) => {
            topicActions.deleteTopic(dispatch, item)
        },
        updateTopic: (topic) => {
            topicActions.updateTopic(dispatch, topic)
        }

    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(TopicPills)