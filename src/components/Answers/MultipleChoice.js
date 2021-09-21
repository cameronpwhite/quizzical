import React, { useState, useEffect } from 'react'

export const MultipleChoice = ( {questionNumber }) => {

    const [possibleAnswers, setPossibleAnswers] = useState({})
    const [correctAnswerId, setCorrectAnswer] = useState([])

    const handleCorrectAnswer = (inputId) => {

        switch(inputId) {

            case `correctAnswer1--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer1--${questionNumber}`)
                return 
            break;

            case `correctAnswer2--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer2--${questionNumber}`)
                return 
            break;

            case `correctAnswer3--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer3--${questionNumber}`)
                return 
            break;

            case `correctAnswer4--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer4--${questionNumber}`)
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
                    onChange={e => handleCorrectAnswer(e.target.id)}
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
                    onChange={e => setCorrectAnswer(e.target.id)}
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
                    onChange={e => setCorrectAnswer(e.target.id)}
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
                    onChange={e => setCorrectAnswer(e.target.id)}
                />
                Correct Answer
            </div>
        </>
    )
}