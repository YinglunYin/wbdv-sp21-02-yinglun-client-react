import React from 'react'
import './course-row.css'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        quizzes,
        title,
        owner
    }
) => {

    const [editing, setEditing] = React.useState(false)
    const [newTitle, setNewTitle] = React.useState(title)

    const saveTitle = (flag) => {
        setEditing(false)
        if (flag) {
            const newCourse = {
                ...course,
                title: newTitle
            }
            updateCourse(newCourse)
        }else{setNewTitle(course.title)}
    }

    return (
        <div className="row mx-sm-5 wbdv-courselist-body">
            <div className="col-5">
                {
                    !editing &&
                    <Link to={`/courses/table/edit/${course._id}`}>
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </div>
            <div className="col-sm-2 d-none d-sm-inline">{owner}</div>
            <div className="col-sm-2 d-none d-md-inline">{lastModified}</div>
            <div className="col-sm-2 d-none d-md-inline"><Link to={`/courses/${course._id}/quizzes`}>Quizzes</Link></div>
            <div className="col-auto ml-auto float-right">
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"/>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"/>}
                {editing && <i onClick={() => saveTitle(true)} className="fas fa-check"/>}
                {editing && <i onClick={() => saveTitle(false)} className="fas fa-times"/>}
            </div>
        </div>
    )
}

export default CourseRow