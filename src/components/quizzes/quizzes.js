import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quizzes-service"
import "./quizzes.css"

const Quizzes = ({
                     back = "/courses/table"
                 }
) => {

    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {

        quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])

    return (
        <div>
            <Link to={back}>
                <i className="fas fa-caret-left fa-2x m-3"/>
            </Link>
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                    <button type="button"
                                            className="btn btn-primary float-right">Start
                                    </button>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Quizzes