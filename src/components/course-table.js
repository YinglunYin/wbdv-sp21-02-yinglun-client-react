import React from 'react'
import {Link} from "react-router-dom";
import CourseRow from "./course-row";
import './course-table.css';

export default class CourseTable extends React.Component {
    render() {
        return (
            <div>
                <div className={'container-fulid wbdv-courselist-title-container'}>
                    <div className={'row wbdv-courselist-title'}>
                        <div className="col-10 col-sm-5">Title</div>
                        <div className="col-sm-2 d-none d-sm-inline">Owned by</div>
                        <div className="col-sm-2 d-none d-sm-inline">Modified</div>

                        <div className="col-1"><i
                            className="fas fa-th float-right"></i></div>
                        <div className="col-1"><i
                            className="fas fa-sort-alpha-up-alt float-right"></i>
                        </div>
                    </div>

                </div>

                <div className="container-fulid">
                    <CourseRow/>
                </div>
            </div>

        )
    }
}