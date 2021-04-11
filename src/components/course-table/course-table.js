import React from 'react'
import {Link} from "react-router-dom";
import CourseRow from "./course-row";
import './course-table.css';

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div>
                <div className={'container-fulid wbdv-courselist-title-container'}>
                    <div className={'row wbdv-courselist-title'}>
                        <div className="col-6 col-sm-5">Title</div>
                        <div className="col-sm-2 d-none d-sm-inline">Owner</div>
                        <div className="col-sm-2 d-none d-md-inline">Modified</div>

                        <div className="col-2 d-none d-md-inline">Quizzes</div>

                        <div className="col-auto ml-auto float-right">
                            <i className="fas fa-sort-alpha-up-alt mr-1"/>

                            <Link to={"/courses/grid"}>
                                <i className="fas fa-th mr-1"/>
                            </Link>

                            <i className="fas fa-folder"/>
                        </div>
                    </div>

                </div>

                <div className="container-fulid">
                    {
                        this.props.courses.map(course=>
                        <CourseRow
                            updateCourse={this.props.updateCourse}
                            deleteCourse={this.props.deleteCourse}
                            key={course._id}
                            course={course}
                            title={course.title}
                            owner={course.owner}
                            lastModified={course.lastModified}
                        />)
                    }
                </div>
            </div>

        )
    }
}