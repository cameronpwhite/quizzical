import React, { useState, useContext, useEffect } from 'react'
import { QuestionContext } from '../Quizzes/QuestionContext'
import Settings from '../../data/Settings'
import { fetchIt } from '../../data/Fetch'

export const FillinBlank = ({ questionNumber }) => {

    const [possibleAnswer1, setPossibleAnswer1] = useState({})
    const [answersSubmitted, toggleSubmitted] = useState(false)
    const [questionArray, updateQuestionArray] = useContext(QuestionContext)
    const [questionId, setQuestionId] = useState(0)
    const [answerContent, setAnswerContent] = useState("")
    const [correctAnswerId, setCorrectAnswer] = useState([])

    useEffect(() => {

    fetchIt(`${Settings.remoteURL}/questions`)
    .then(res => getDatabaseQuestionId(res))

        const newAnswer = {
            questionId: questionId,
            content: answerContent,
            correct: true
        }

    setPossibleAnswer1(newAnswer)

    }, [questionId, answerContent])

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

    const handlePossibleAnswer = (answerContent) => {

    }

    const handleSubmit = () => {

        if (possibleAnswer1) {        
        fetchIt(`${Settings.remoteURL}/answers`, `POST`, JSON.stringify(possibleAnswer1))
        .then(() => toggleSubmitted(!answersSubmitted))
        console.log("POSTED!")
        } else {
            console.log("Missing some things")
        }
    }

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
                    onChange={e => setAnswerContent(e.target.value)}
                />
                <input
                    type="radio"
                    required
                    name={`correctAnswerForQuestion--${questionNumber}`}
                    className="correct-button"
                    id={`correctAnswer1--${questionNumber}`}
                    defaultChecked
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