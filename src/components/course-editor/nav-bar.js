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

    const {layout, courseId} = useParams()

    useEffect(() => {
        findCourseById(courseId)
    }, [])

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
            <span className="navbar-brand">
                <Link to={`/courses/${layout}`} className="btn btn-primary">
                    <i className="fas fa-angle-left fa-1x"/>
                </Link>
                <span
                    className="font-weight-bold px-1 align-self-center">{course.title}</span>
            </span>

            <Link className="text-white d-inline " to="/"><i
                className="fas fa-home fa-2x"/> </Link>
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
