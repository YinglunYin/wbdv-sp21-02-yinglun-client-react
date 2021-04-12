import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import questionService from "../../services/questions-service"
import quizzesService from "../../services/quizzes-service"
import Question from "./question";

const Quiz = () => {

    const {courseId, quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [attempts, setAttempts] = useState([])
    const [allAnswered, setAllAnswered] = useState(true)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then(
            (questions) => {
                setQuestions(questions)
            }
        )
        updateAttempts()
    }, [])

    const setAnswer = (answer) => {
        let t_questions = questions.map((question) => {
            if (question._id !== answer._id) {
                return question
            } else {
                question.answer = answer.answer
                return question
            }
        })

        setQuestions(t_questions)
    }

    const checkIfAnswered = () => {
        setAllAnswered(true)
        questions.forEach((question) => {
            if (question.answer === "") {
                setAllAnswered(false)
            }
        })

        return allAnswered
    }

    const updateAttempts =() => {
        quizzesService.getAttempts(quizId)
            .then(
                (attempts) => {
                    setAttempts(attempts)
                }
            )
    }

    let times = 1

    return (
        <div>
            <Link to={`/courses/${courseId}/quizzes`}>
                <i className="fas fa-caret-left fa-2x m-3"/>
            </Link>

            <h3>Quiz {quizId} ({questions.length})</h3>

            <table className="table">
                <thead>
                <th scope="col">Attempts</th>
                <th scope="col">Score</th>
                </thead>

                <tbody>
                {
                    attempts.map((attempt) => {
                        return (
                            <tr>
                                <td>Attempt {times++}</td>
                                <td>{attempt.score}</td>
                            </tr>

                        )
                    })
                }
                </tbody>
            </table>


            <ul className="list-group">
                {
                    questions.map((question) => {
                        return (
                            <li className="list-group-item">
                                <Question
                                    question={question}
                                    setAnswer={setAnswer}
                                    hasSubmitted={hasSubmitted}
                                />
                            </li>
                        )
                    })
                }
            </ul>

            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        checkIfAnswered()
                        if (!allAnswered) {
                            alert("Please answer all questions!")
                        } else {
                            quizzesService.submitQuiz(quizId, questions)
                                .then(()=>updateAttempts())
                            setHasSubmitted(true)
                        }
                    }}
            >
                Submit
            </button>
            <button type="button"
                    className="btn btn-primary ml-4"
                    onClick={() => {
                        setHasSubmitted(false)
                    }}
            >
                Cancel
            </button>
        </div>
    )
}

export default Quiz;