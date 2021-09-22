import React, { useState, useContext } from 'react'
import { fetchIt } from '../../data/Fetch'
import { QuestionContext } from '../Quizzes/QuestionContext'
import Settings from '../../data/Settings'

export const MultipleChoice = ( {questionNumber} ) => {

    const [possibleAnswer1, setPossibleAnswer1] = useState({})
    const [possibleAnswer2, setPossibleAnswer2] = useState({})
    const [possibleAnswer3, setPossibleAnswer3] = useState({})
    const [possibleAnswer4, setPossibleAnswer4] = useState({})

    const [answersSubmitted, toggleSubmitted] = useState(false)

    const [correctAnswerId, setCorrectAnswer] = useState([])
    const [questionArray, updateQuestionArray] = useContext(QuestionContext)
    const [questionId, setQuestionId] = useState(0)

    const getCurrentQuestion = (questionArray) => {
        
        const currentQuestion = questionArray.find(
            question => {
                return question.number === questionNumber
            }
        )
        console.log("Current question", currentQuestion)
        return currentQuestion
    }

    
    const getDatabaseQuestionId = (questions) => {
        
        const currentQuestion = getCurrentQuestion(questionArray)

        const databaseQuestion = questions.find(
            question => {
                return question.number === currentQuestion.number && question.quizId === currentQuestion.quizId
            }
        )
        // Assign this Id to each of your answers in the answers array.
        setQuestionId(databaseQuestion.id)
    }

    // Fetch the question from the database - only for the current question number.
    // const [questionArray, updateQuestionArray] = useContext(QuestionContext)
    // Use the quizId* (I dont think I'll need it if I have the questionArray) and the number so the answer is assigned to the right question.
    // Create an array of answers with their associated questionIds.
    // export const answerContext = React.createContext(answerContext)
    // Export this back into where the questions are posted.
    // Then post the answer for the question. 

    const handleCorrectAnswer = (inputId) => {

        switch(inputId) {

            case `correctAnswer1--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer1--${questionNumber}`)
                return 

            case `correctAnswer2--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer2--${questionNumber}`)
                return 


            case `correctAnswer3--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer3--${questionNumber}`)
                return 

            case `correctAnswer4--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer4--${questionNumber}`)
                return
            
        }
    }

    const handlePossibleAnswer = (answerId, answerContent) => {

        fetchIt(`${Settings.remoteURL}/questions`)
        .then(res => getDatabaseQuestionId(res))

        if (answerId === correctAnswerId) {
            const newAnswer = {
                questionId: questionId,
                content: answerContent,
                correct: true
            }
            if (answerId === `possibleAnswer1--${questionNumber}`) {
                setPossibleAnswer1(newAnswer)
            }
            if (answerId === `possibleAnswer2--${questionNumber}`) {
                setPossibleAnswer2(newAnswer)
            }
            if (answerId === `possibleAnswer3--${questionNumber}`) {
                setPossibleAnswer3(newAnswer)
            }
            if (answerId === `possibleAnswer4--${questionNumber}`) {
                setPossibleAnswer4(newAnswer)
            }
    
        } else {
            let newAnswer = {
                questionId: questionId,
                content: answerContent,
                correct: false
            }
            if (answerId === `possibleAnswer1--${questionNumber}`) {
                setPossibleAnswer1(newAnswer)
            }
            if (answerId === `possibleAnswer2--${questionNumber}`) {
                setPossibleAnswer2(newAnswer)
            }
            if (answerId === `possibleAnswer3--${questionNumber}`) {
                setPossibleAnswer3(newAnswer)
            }
            if (answerId === `possibleAnswer4--${questionNumber}`) {
                setPossibleAnswer4(newAnswer)
            }
        }
    }

    const handleSubmit = () => {

        if (possibleAnswer1 && possibleAnswer2 && possibleAnswer3 && possibleAnswer4 && correctAnswerId) {        
        fetchIt(`${Settings.remoteURL}/answers`, `POST`, JSON.stringify(possibleAnswer1))
        fetchIt(`${Settings.remoteURL}/answers`, `POST`, JSON.stringify(possibleAnswer2))
        fetchIt(`${Settings.remoteURL}/answers`, `POST`, JSON.stringify(possibleAnswer3))
        fetchIt(`${Settings.remoteURL}/answers`, `POST`, JSON.stringify(possibleAnswer4))
        .then(toggleSubmitted(!answersSubmitted))

        console.log("POSTED!")
        } else {
            console.log("Missing some things")
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
                    onChange={e => handlePossibleAnswer(e.target.id, e.target.value)}
                />
                <input
                    type="radio"
                    required
                    id={`correctAnswer1--${questionNumber}`}
                    className="correct-button"
                    name={`correctAnswerForQuestion--${questionNumber}`}
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
                    onChange={e => handlePossibleAnswer(e.target.id, e.target.value)}
                />
                <input
                    type="radio"
                    required
                    id={`correctAnswer2--${questionNumber}`}
                    className="correct-button"
                    name={`correctAnswerForQuestion--${questionNumber}`}
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
                    onChange={e => handlePossibleAnswer(e.target.id, e.target.value)}
                />
                <input
                    type="radio"
                    required
                    id={`correctAnswer3--${questionNumber}`}
                    className="correct-button"
                    name={`correctAnswerForQuestion--${questionNumber}`}
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
                    onChange={e => handlePossibleAnswer(e.target.id, e.target.value)}
                />
                <input
                    type="radio"
                    required
                    id={`correctAnswer4--${questionNumber}`}
                    className="correct-button"
                    name={`correctAnswerForQuestion--${questionNumber}`}
                    onChange={e => setCorrectAnswer(e.target.id)}
                />
                Correct Answer
                <br></br>
                {answersSubmitted
                ? ""
                :<button onClick={() => handleSubmit()}>Submit Answers</button>}
            </div>
        </>
    )
}