import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, deleteCourse, updateCourse, key}) => {

    const [editing, setEditing] = React.useState(false)
    const [newTitle, setNewTitle] = React.useState(course.title)

    const saveTitle = (flag) => {
        setEditing(false)
        if (flag) {
            const newCourse = {
                ...course,
                title: newTitle
            }
            updateCourse(newCourse)
        }else{}
    }

    return (
        <div className={'col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'}>
            <div className="card">
                <img src={course.img} className="card-img-top" alt="Card Title Image"/>
                <div className="card-body">
                    {!editing && <h5 className="card-title">{course.title}</h5>}
                    {editing && <input type={"text"}
                                       onChange={(event) => setNewTitle(event.target.value)}
                                       value={newTitle}/>}
                    <p className="card-text">{course.description}</p>
                    <Link to={"/courses/editor"} className="btn btn-primary">{course.title}</Link>
                    <div>
                        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"/>}
                        {editing && <i onClick={() => saveTitle(true)} className="fas fa-check"/>}
                        {editing && <i onClick={() => saveTitle(false)} className="fas fa-times"/>}
                        <i onClick={() => deleteCourse(course)} className="fas fa-trash"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseCard