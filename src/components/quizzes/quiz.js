import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import questionService from "../../services/questions-service"
import Question from "./question";

const Quiz = (

) => {

    const {courseId,quizId} = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then(
            (questions) => {
                setQuestions(questions)
            }
        )
    }, [])

    return (
        <div>
            <Link to={`/courses/${courseId}/quizzes`}>
                <i className="fas fa-caret-left fa-2x m-3"/>
            </Link>

            <h3>Quiz {quizId} ({questions.length})</h3>
             <ul className= "list-group">
                    {
                        questions.map((question) => {
                            return (
                                <li className="list-group-item">
                                    <Question question={question}/>
                                </li>
                            )
                        })
                    }
                </ul>
        </div>
    )
}

export default Quiz;