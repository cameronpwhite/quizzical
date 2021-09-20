import React from 'react'

export const TrueFalse = ({ questionNumber }) => {

    return (
        <>
            <div className="form-possibleAnswers">
                {/* Generate possible answers based on selection Type */}
                <label htmlFor="possibleAnswers">Answers:</label>
                <br></br>
                <input
                    type="text"
                    required
                    className="form-control"
                    id="possibleAnswer1"
                    placeholder="Answer 1"
                />
                <input
                    type="radio"
                    required
                    name="answerCorrect"
                    className="correct-button"
                    id="correctAnswer"
                />
                Correct Answer
                <br></br>
                <input
                    type="text"
                    required
                    className="form-control"
                    id="possibleAnswer2"
                    placeholder="Answer 2"
                />
                <input
                    type="radio"
                    required
                    name="answerCorrect"
                    className="correct-button"
                    id="correctAnswer"
                />
                Correct Answer
            </div>
        </>
    )
}