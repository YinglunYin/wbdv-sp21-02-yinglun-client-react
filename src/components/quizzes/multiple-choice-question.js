import React, {useState} from "react";

const MultipleChoiceQuestion = ({
                                    question,
                                    setAnswer,
                                    hasSubmitted
                                }) => {
    // const [hasSubmitted, setIsGrade] = useState(false);
    const [yourAnswer, setYourAnswer] = useState("")

    return (
        <div>
            <h5>
                {question.question}
                {
                    hasSubmitted && question.correct === yourAnswer &&
                    <i className="fas fa-check float-right wbdv-true-icon"/>
                }
                {
                    hasSubmitted && question.correct !== yourAnswer &&
                    <i className="fas fa-times float-right wbdv-false-icon"/>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li
                                className={
                                    (() => {
                                        if (hasSubmitted && question.correct === choice) {
                                            return 'list-group-item list-group-item-success'
                                        } else if (hasSubmitted && yourAnswer !== question.correct
                                                   && yourAnswer === choice) {
                                            return 'list-group-item list-group-item-danger'
                                        } else {
                                            return 'list-group-item'
                                        }
                                    })()
                                }
                            >
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                        question.answer = choice
                                        setAnswer(question)
                                    }}
                                    type="radio"
                                    name={question._id}
                                    checked={yourAnswer === choice}
                                    disabled={hasSubmitted}
                                />
                                    {choice}

                                    {
                                        (() => {
                                            if (hasSubmitted && question.correct === choice) {
                                                return (
                                                    <i className="fas fa-check float-right wbdv-true-icon"/>)
                                            } else if (hasSubmitted && yourAnswer !== question.correct
                                                       && yourAnswer === choice) {
                                                return (
                                                    <i className="fas fa-times float-right wbdv-false-icon"/>)
                                            } else {
                                                return ''
                                            }
                                        })()
                                    }

                                </label>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>

            {/*<button type="button"*/}
            {/*        className="btn btn-success"*/}
            {/*        onClick={() => {*/}
            {/*            if (yourAnswer === '') {*/}
            {/*                alert('Please choose an answer before grading！')*/}
            {/*            } else {*/}
            {/*                setIsGrade(true)*/}
            {/*            }*/}
            {/*        }}*/}
            {/*>*/}
            {/*    Grade*/}
            {/*</button>*/}
            {/*<button type="button"*/}
            {/*        className="btn btn-primary ml-4"*/}
            {/*        onClick={() => {*/}
            {/*            setIsGrade(false)*/}
            {/*        }}*/}
            {/*>*/}
            {/*    Cancel*/}
            {/*</button>*/}
        </div>
    )
}

export default MultipleChoiceQuestion