import React, {useState} from 'react'


export const TrueFalse = ({ questionNumber }) => {

    const [possibleAnswers, setPossibleAnswers] = useState({})
    const [correctAnswer, setCorrectAnswer] = useState([])

    const handleCorrectAnswer = (answerId) => {

        switch(answerId) {

            case `correctAnswer1--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer1--${questionNumber}`)
                return 
            break;

            case `correctAnswer2--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer2--${questionNumber}`)
                return 
            break;  
        }
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
                    name="answerCorrect"
                    className="correct-button"
                    id={`correctAnswer1--${questionNumber}`}
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
                    name="answerCorrect"
                    className="correct-button"
                    id={`correctAnswer2--${questionNumber}`}
                />
                Correct Answer
            </div>
        </>
    )
}