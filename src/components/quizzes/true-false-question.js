import React, {useState} from 'react';

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState('');
    const [isGrade, setIsGrade] = useState(false);

    return (
        <div>
            <h5>
                {question.question}
                {
                    (isGrade && question.correct === yourAnswer) &&
                    <i className="fas fa-check float-right wbdv-true-icon"/>
                }
                {
                    (isGrade && question.correct !== yourAnswer) &&
                    <i className="fas fa-times float-right wbdv-false-icon"/>
                }

            </h5>
            <ul className="list-group">

                <li className={
                    (() => {
                        if (!isGrade || (yourAnswer === question.correct && yourAnswer
                                         === 'false')) {
                            return 'list-group-item'
                        } else if (question.correct === 'true') {
                            return 'list-group-item list-group-item-success'
                        } else {
                            return 'list-group-item list-group-item-danger'
                        }

                    })()
                }>
                    <lable>
                        <input type='radio'
                               className=''
                               onClick={() => {
                                   setYourAnswer('true')
                               }}
                               name={question._id}
                               checked={yourAnswer === 'true'}
                               disabled={isGrade}
                        />
                        TRUE
                        {
                            (() => {
                                if (!isGrade || (yourAnswer === question.correct && yourAnswer
                                                 === 'false')) {
                                    return ""
                                } else if (question.correct === 'true') {
                                    return (
                                        <i className="fas fa-check float-right wbdv-true-icon"/>)
                                } else {
                                    return (
                                        <i className="fas fa-times float-right wbdv-false-icon"/>)
                                }

                            })()
                        }
                    </lable>
                </li>

                <li className={
                    (() => {
                        if (!isGrade || (yourAnswer === question.correct && yourAnswer
                                         === 'true')) {
                            return 'list-group-item'
                        } else if (question.correct === 'false') {
                            return 'list-group-item list-group-item-success'
                        } else {
                            return 'list-group-item list-group-item-danger'
                        }

                    })()
                }>
                    <lable>
                        <input type='radio'
                               className=''
                               onClick={() => {
                                   setYourAnswer('false')
                               }}
                               name={question._id}
                               checked={yourAnswer === 'false'}
                               disabled={isGrade}
                        />FALSE
                        {
                            (() => {
                                if (!isGrade || (yourAnswer === question.correct && yourAnswer
                                                 === 'true')) {
                                    return ""
                                } else if (question.correct === 'false') {
                                    return (
                                        <i className="fas fa-check float-right wbdv-true-icon"/>)
                                } else {
                                    return (
                                        <i className="fas fa-times float-right wbdv-false-icon"/>)
                                }

                            })()
                        }
                    </lable>
                </li>

            </ul>

            <p>
                Your answer: {yourAnswer}
            </p>

            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        if (yourAnswer === '') {
                            alert('Please choose an answer before grading！')
                        } else {
                            setIsGrade(true)
                        }
                    }}
            >
                Grade
            </button>
            <button type="button"
                    className="btn btn-primary ml-4"
                    onClick={() => {
                        setIsGrade(false)
                    }}
            >
                Cancel
            </button>
            <hr/>

        </div>
    )

}

export default TrueFalseQuestion;