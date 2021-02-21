import React from 'react'
import './course-row.css'

const CourseRow =() =>
    <div className="row mx-sm-5 wbdv-courselist-body">
        <div className="col-5">
            <a href="../editor/editor.template.client.html">
                <i className="fas fa-file-alt"></i> CS5500 Software Engineer Graduate
            </a>
        </div>
        <div className="col-sm-2 d-none d-sm-inline">me</div>
        <div className="col-sm-4 d-none d-sm-inline">6:45 PM</div>
        <div className="col-auto ml-auto float-right">X</div>
    </div>

export default CourseRow