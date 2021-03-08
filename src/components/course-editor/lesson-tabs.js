import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"

const LessonTabs = (
    {
        lessons = [],
        createLesson,
        deleteLesson,
        updateLesson,
        findLessonsForModule,
    }) => {

    const {flag, courseId, moduleId} = useParams()

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
            setModuleFlag(true)
        } else {
            setModuleFlag(false)
        }
    }, [moduleId])

    const [moduleFlag, setModuleFlag] = useState(false)

    return (

        moduleFlag &&

        <div className="row py-1">
            <ul className="nav nav-tabs col-12">
                {
                    lessons.map(lesson =>
                                    <li className="nav-item font-weight-bold">
                                        <Link
                                            className="nav-link"
                                            to={`/courses/${flag}/editor/${courseId}/${moduleId}/${lesson._id}`}>
                                            <EditableItem
                                                deleteItem={deleteLesson}
                                                updateItem={updateLesson}
                                                to={`/courses/${flag}/editor/${courseId}/${moduleId}/${lesson._id}`}
                                                back={`/courses/${flag}/editor/${courseId}/${moduleId}`}
                                                item={lesson}/>
                                        </Link>
                                    </li>
                    )
                }

                <a href="#" className="align-self-center px-3 py-2">
                    <i onClick={() => createLesson(moduleId)}
                       className="fas fa-plus fa-1x"/>
                </a>
            </ul>
        </div>
    )
}

const stateToPropsMapper = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dispatchToPropsMapper = (dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then((theLessons) => dispatch({
                                                   type: "FIND_LESSON_FOR_MODULE",
                                                   lessons: theLessons
                                               }))
        },
        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then((theActuallLesson) => dispatch({
                                                         type: "CREATE_LESSON",
                                                         lesson: theActuallLesson
                                                     }))
        },
        deleteLesson: (item) => {
            lessonService.deleteLesson(item._id)
                .then(status => dispatch({
                                             type: "DELETE_LESSON",
                                             lessonToDelete: item
                                         }))
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                                             type: "UPDATE_LESSON",
                                             lesson: lesson
                                         }))
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(LessonTabs)