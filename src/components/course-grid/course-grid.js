import React from 'react'
import CourseCard from "./course-card";
import {Link, Route} from "react-router-dom";
import CourseRow from "../course-table/course-row";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div>
        <div className={'container-fulid wbdv-courselist-title-container'}>
            <div className={'row wbdv-courselist-title'}>
                <div className="col-8 col-sm-5">Recent Documents</div>
                <div className="col-sm-4 d-none d-sm-inline">Owned by me</div>

                <div className="col-auto ml-auto float-right">
                    <i className="fas fa-sort-alpha-up-alt mr-1"/>

                    <Link to={"/courses/table"}>
                        <i className="fas fa-list mr-1"/>
                    </Link>

                    <i className="fas fa-folder"/>
                </div>
            </div>
        </div>

        <div className={'container-fluid'}>
            <div className={'row'}>
                {
                    courses.map(course =>
                                    <CourseCard
                                        key = {course._id}
                                        updateCourse={updateCourse}
                                        deleteCourse={deleteCourse}
                                        course={course}/>
                    )
                }
            </div>
        </div>
    </div>

export default CourseGrid