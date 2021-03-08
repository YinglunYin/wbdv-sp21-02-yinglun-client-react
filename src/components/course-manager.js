import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import CourseServer from "../services/course-service"
import {Link, Route} from 'react-router-dom'

import './course-manager.css'

export default class CourseManager extends React.Component {

    state = {
        courses: [],
        newCourseTitle: ''
    }

    componentDidMount = () => CourseServer.findAllCourses()
        .then(courses => this.setState({courses}))

    setNewCourseTitle = (newTitle) => {
        this.setState({
                          newCourseTitle: newTitle
                      })
        console.log(this.state.newCourseTitle)
    }

    addCourse = () => {
        const newCourse = {
            title: this.state.newCourseTitle,
            owner: "me",
            lastModified: "01/01/2021",
            img: "https://cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.41/dist/img/react.png",
            description: "Some Description"
        }
        console.log(newCourse)
        CourseServer.createCourse(newCourse)
            .then((course) => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
    }

    deleteCourse = (courseToDelete) => {
        CourseServer.deleteCourse(courseToDelete._id)
            .then(status => {

                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    updateCourse = (course) => {
        console.log(course)
        CourseServer.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    render() {
        return (
            <div>
                {/*Table*/}
                <Route path={"/courses/table"}>
                    <nav
                        className="navbar navbar-dark bg-primary sticky-top d-flex">
                        <span className="navbar-brand">
                            <a className="navbar-brand" href="#">
                                <i className="fas fa-bars"/>
                            </a>
                            <span
                                className="d-none d-lg-inline font-weight-bold">Course Manager</span>
                        </span>

                        <div className="w-75 d-inline">
                            <div className="input-group">
                                <input
                                    onChange={(event) => this.setNewCourseTitle(event.target.value)}
                                    value={this.state.newCourseTitle}
                                    className="form-control" type="text"
                                    placeholder="New Course Title"/>
                                <button onClick={this.addCourse}
                                        className="btn btn-danger rounded-circle ml-3">
                                    <i className="fas fa-plus"/>
                                </button>
                            </div>
                        </div>

                        <Link className="text-white d-inline" to="/"><i
                            className="fas fa-home fa-2x"/> </Link>
                    </nav>

                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>

                    <span className="btn btn-danger ml-3 wbdv-btn-fixed wbdv-btn-circle">
                        <i onClick={this.addCourse} className="fas fa-plus fa-2x"/>
                </span>
                </Route>

                {/*Grid*/}
                <Route path={"/courses/grid"}>
                    <nav
                        className="navbar navbar-dark bg-primary sticky-top d-flex">

                        <span className="navbar-brand d-inline">
                            <a className="navbar-brand" href="#">
                                <i className="fas fa-bars"/>
                            </a>
                            <span
                                className="d-none d-lg-inline font-weight-bold">Course Manager</span>
                        </span>

                        <div className="w-75 d-inline">
                            <div className="input-group">
                                <input
                                    onChange={(event) => this.setNewCourseTitle(event.target.value)}
                                    value={this.state.newCourseTitle}
                                    className="form-control" type="text"
                                    placeholder="New Course Title"/>
                                <button onClick={this.addCourse}
                                        className="btn btn-danger rounded-circle ml-3">
                                    <i className="fas fa-plus"/>
                                </button>
                            </div>
                        </div>

                        <Link className="text-white d-inline" to="/"><i
                            className="fas fa-home fa-2x"/> </Link>

                    </nav>

                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}/>

                    <span className="btn btn-danger ml-3 wbdv-btn-fixed wbdv-btn-circle">
                        <i onClick={this.addCourse} className="fas fa-plus fa-2x"/>
                </span>
                </Route>

                {/* :courseId placeHolder */}
                <Route path={["/courses/:flag/editor/:courseId/:moduleId/:lessonId/:topicId",
                              "/courses/:flag/editor/:courseId/:moduleId/:lessonId",
                              "/courses/:flag/editor/:courseId/:moduleId/",
                              "/courses/:flag/editor/:courseId/",
                              "/courses/:flag/editor/"
                ]}
                       render={(props) => {
                           console.log(props)
                           return (<CourseEditor {...props}/>)
                       }}>
                </Route>

            </div>

        )
    }
}
