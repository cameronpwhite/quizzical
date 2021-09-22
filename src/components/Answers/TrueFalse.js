import React, { useState, useContext } from 'react'
import { QuestionContext } from '../Quizzes/QuestionContext'
import Settings from '../../data/Settings'
import { fetchIt } from '../../data/Fetch'


export const TrueFalse = ({ questionNumber }) => {

    const [possibleAnswer1, setPossibleAnswer1] = useState({})
    const [possibleAnswer2, setPossibleAnswer2] = useState({})
    const [answersSubmitted, toggleSubmitted] = useState(false)
    const [questionArray, updateQuestionArray] = useContext(QuestionContext)
    const [questionId, setQuestionId] = useState(0)
    const [correctAnswerId, setCorrectAnswer] = useState([])

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
            }
        }

        const handleSubmit = () => {

            if (possibleAnswer1 && possibleAnswer2 && correctAnswerId) {        
            fetchIt(`${Settings.remoteURL}/answers`, `POST`, JSON.stringify(possibleAnswer1))
            fetchIt(`${Settings.remoteURL}/answers`, `POST`, JSON.stringify(possibleAnswer2))
            .then(toggleSubmitted(!answersSubmitted))
    
            console.log("POSTED!")
            } else {
                console.log("Missing some things")
            }
        }

    const handleCorrectAnswer = (answerId) => {

        switch(answerId) {

            case `correctAnswer1--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer1--${questionNumber}`)
                return 


            case `correctAnswer2--${questionNumber}`:
                setCorrectAnswer(`possibleAnswer2--${questionNumber}`)
                return 
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
                    name={`correctAnswerForQuestion--${questionNumber}`}
                    className="correct-button"
                    id={`correctAnswer1--${questionNumber}`}
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
                    name={`correctAnswerForQuestion--${questionNumber}`}
                    className="correct-button"
                    id={`correctAnswer2--${questionNumber}`}
                    onChange={e => handleCorrectAnswer(e.target.id)}
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