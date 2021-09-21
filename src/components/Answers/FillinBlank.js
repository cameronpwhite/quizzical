import React from 'react'

export const FillinBlank = ({ questionNumber }) => {


    return (
        <>
            <div className="form-possibleAnswers">
                {/* Generate possible answers based on selection Type */}
                <label htmlFor={`possibleAnswer--${questionNumber}`}>Answer:</label>
                <br></br>
                <input
                    type="text"
                    required
                    name="answerInput"
                    className="form-control"
                    id={`possibleAnswer1--${questionNumber}`}
                    placeholder="Answer 1"
                />
                <input
                    type="radio"
                    required
                    name="answerCorrect"
                    className="correct-button"
                    id={`correctAnswer1--${questionNumber}`}
                    defaultChecked
                />
                Correct Answer
            </div>
        </>
    )
}