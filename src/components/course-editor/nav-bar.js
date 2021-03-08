import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {Link, useParams} from "react-router-dom";
import courseReducer from "../../reducers/course-reducers";
import courseService from "../../services/course-service";

const NarBar = ({
                    course = {},
                    findCourseById
                }) => {

    const {flag, courseId} = useParams()

    useEffect(() => {
        findCourseById(courseId)
    }, [])

    let back = ""
    if (flag === "g") {
        back = "grid"
    } else if (flag === "t") {
        back = "table"
    }

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                    <span className="navbar-brand">
                        <Link to={`/courses/${back}`} className="btn btn-primary">
                            <i className="fas fa-angle-left fa-1x"/>
                        </Link>
                        <span
                            className="font-weight-bold px-1 align-self-center">{course.title}</span>
                    </span>
        </nav>
    )
}

const stateToPropsMapper = (state) => {
    return {
        course: state.courseReducer.course
    }
}

const dispatchToPropsMapper = (dispatch) => {
    return {
        findCourseById: (courseId) => {
            courseService.findCourseById(courseId)
                .then((theCourse) => dispatch({
                                                  type: "FIND_COURSE_BY_ID",
                                                  course: theCourse
                                              }))
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(NarBar)
