import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service"
import lessonActions from "../../actions/lesson-actions";

const LessonTabs = (
    {
        lessons = [],
        createLesson,
        deleteLesson,
        updateLesson,
        findLessonsForModule,
    }) => {

    const {layout, courseId, moduleId, lessonId} = useParams()

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
                    lessons.map(lesson => {
                                    let active = ""

                                    if (lesson._id === lessonId) {
                                        active = "active"
                                    }
                                    return (
                                        <li key = {lesson._id} className="nav-item font-weight-bold">
                                            <Link
                                                className={`nav-link ${active}`}
                                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}>
                                                <EditableItem
                                                    deleteItem={deleteLesson}
                                                    updateItem={updateLesson}
                                                    // to={`/courses/${flag}/editor/${courseId}/${moduleId}/${lesson._id}`}
                                                    back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}`}
                                                    item={lesson}/>
                                            </Link>
                                        </li>
                                    )
                                }
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
            lessonActions.findLessonsForModule(dispatch, moduleId)
        },
        createLesson: (moduleId) => {
            lessonActions.createLesson(dispatch, moduleId)
        },
        deleteLesson: (item) => {
            lessonActions.deleteLesson(dispatch, item)
        },
        updateLesson: (lesson) => {
            lessonActions.updateLesson(dispatch, lesson)
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(LessonTabs)