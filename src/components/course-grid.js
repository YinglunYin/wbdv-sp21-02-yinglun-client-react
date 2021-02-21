import React from 'react'
import CourseCard from "./course-card";
import {Link, Route} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse}) =>
    <div>
        <div className={'container-fulid wbdv-courselist-title-container'}>
            <div className={'row wbdv-courselist-title'}>
                <div className="col-10 col-sm-5">Recent Documents</div>
                <div className="col-sm-4 d-none d-sm-inline">Owned by me</div>

                <div className="col-1"><i
                    className="fas fa-th float-right"></i></div>
                <div className="col-1"><i
                    className="fas fa-sort-alpha-up-alt float-right"></i>
                </div>
            </div>

        </div>

        <div className="row">
            {
                courses.map((course,ndx) =>
                                <CourseCard
                                    deleteCourse={deleteCourse}
                                    course={course}
                                    key={ndx}
                                />
                )
            }
        </div>
    </div>

export default CourseGrid