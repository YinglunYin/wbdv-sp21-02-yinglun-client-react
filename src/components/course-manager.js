import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from 'react-router-dom'

import styles from './course-manager.css'


export default class CourseManager extends React.Component {

    state = {
        courses: [],
    }

    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-dark bg-primary sticky-top d-flex justify-content-start">

                <span className="navbar-brand">
                    <a className="navbar-brand" href="#"><i className="fas fa-bars"></i></a>
                    <span className="d-none d-lg-inline font-weight-bold">Course Manager</span>
                </span>

                    <form className="w-75 d-inline">
                        <div className="input-group">
                            <input className="form-control" type="text"
                                   placeholder="New Course Title"/>
                            <button className="btn btn-danger rounded-circle ml-3" type="submit"><i
                                className="fas fa-plus"/>
                            </button>
                        </div>
                    </form>
                </nav>

                {/*<button className={`"btn btn-danger rounded-circle ml-3 float-right" ${styles.fixedBtn}`} type="submit"><i*/}
                {/*    className="fas fa-plus"/>*/}
                {/*</button>*/}

                <Route path={"/courses/table"}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses = {this.state.courses}/>
                </Route>

                <Route path={"/courses/grid"}>
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        courses = {this.state.courses}/>
                </Route>

            </div>

        )
    }
}
