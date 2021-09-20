import React, { useState, useEffect } from 'react'

export const MultipleChoice = ( {questionNumber }) => {

    const [possibleAnswers, setPossibleAnswers] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState([])

    const handleCorrectAnswer = (answerId) => {

        switch(answerId) {

            case `correctAnswer1--${questionNumber}`:
                return 
            break;

            case `correctAnswer1--${questionNumber}`:
                return 
            break;

            case `correctAnswer1--${questionNumber}`:
                return 
            break;

            case `correctAnswer1--${questionNumber}`:
                return 
            break;
            
        }
    }

    const handlePossibleAnswer = (answerId) => {

        
    }


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
                    id={`possibleAnswer1--${questionNumber}`}
                    placeholder="Answer 1"
                />
                <input
                    type="radio"
                    required
                    id={`correctAnswer1--${questionNumber}`}
                    className="correct-button"
                    name="correctAnswer"
                />
                Correct Answer
                <br></br>
                <input
                    type="text"
                    required
                    className="form-control"
                    id={`possibleAnswer2--${questionNumber}`}
                    placeholder="Answer 2"
                />
                <input
                    type="radio"
                    required
                    id={`correctAnswer2--${questionNumber}`}
                    className="correct-button"
                    name="correctAnswer"

                />
                Correct Answer
                <br></br>
                <input
                    type="text"
                    required
                    className="form-control"
                    id={`possibleAnswer3--${questionNumber}`}
                    placeholder="Answer 3"
                />
                <input
                    type="radio"
                    required
                    id={`correctAnswer3--${questionNumber}`}
                    className="correct-button"
                    name="correctAnswer"
                />
                Correct Answer
                <br></br>
                <input
                    type="text"
                    required
                    className="form-control"
                    id={`possibleAnswer4--${questionNumber}`}
                    placeholder="Answer 4"
                />
                <input
                    type="radio"
                    required
                    id={`correctAnswer4--${questionNumber}`}
                    className="correct-button"
                    name="correctAnswer"
                />
                Correct Answer
            </div>
        </>
    )
}