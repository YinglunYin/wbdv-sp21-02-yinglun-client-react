import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({
                      question,
                      setAnswer,
                      hasSubmitted,
                  }) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    setAnswer={setAnswer}
                    hasSubmitted={hasSubmitted}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={question}
                                        setAnswer={setAnswer}
                                        hasSubmitted={hasSubmitted}/>
            }
        </div>
    )
}

export default Question