import React, { useState, useEffect, useContext, useHistory } from 'react'

import { Question } from './Question'

import { QuestionContext } from './QuestionContext'

import { QuizContext } from './QuizContext'

import Settings from '../../data/Settings'

import { fetchIt } from '../../data/Fetch'




export const QuizForm = ({ quizId }) => {

    const history = useHistory
    const [questionTypeId, setQuestionType] = useState(0)
    const [questionContent, setQuestionContent] = useState("")
    const [questionArray, updateQuestionArray] = useState([
    //     {
    //     number: 1,
    //     quizId,
    //     questionTypeId,
    //     questionContent
    // }
    ])
    const [addedQuestion, setAddedQuestion] = useState({})

    const getQuestionSelection = (selectionType) => {
        setQuestionType(selectionType)
    }

    const getQuestionContent = (questionContent) => {
        setQuestionContent(questionContent)
    }

    // useEffect(() => {

    //     const addedQuestion = {
    //         number: questionArray.length + 1,
    //         quizId: quizId,
    //         questionTypeId: questionTypeId,
    //         content: questionContent
    //     }

    //     setAddedQuestion(addedQuestion)

    // }, [questionTypeId, questionContent])
    
    const [quizForm, toggleQuizForm] = useContext(QuizContext)
    
    const addQuestion = () => {
        
        // Before adding a question, post Quiz to database?
        // If Quiz is canceled, DELETE from database.
        // When submitting, assign all those questions for the quiz to the QuizId in database.

        const newQuestion = {
            number: questionArray.length + 1,
            quizId: quizId,
            questionTypeId: questionTypeId,
            content: questionContent
        }

        // Fill out all data before addquestion can be pressed
        // Post question when 'Addquestion is pressed'
        // Fetch the question array

        fetchIt(`${Settings.remoteURL}/questions`, `POST`, JSON.stringify(newQuestion))

        updateQuestionArray(questionArray => [...questionArray, newQuestion])
    }

    const handleCancel = () => {

        toggleQuizForm(!quizForm)
        fetch(`${Settings.remoteURL}/quizzes`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(r => r.json())
            .then(r => deleteCreatedQuiz(r))
    }

    const deleteCreatedQuiz = (quizObjectArray) => {
        
        const createdQuiz = quizObjectArray[quizObjectArray.length - 1]

        fetch(`${Settings.remoteURL}/quizzes/${createdQuiz.id}`, {
            method: 'DELETE',
        })
    }

    const handleSubmit = () => {
        history.push(`/`)
    }

    return (
        <>
            {}
            <form className="quizForm">

                {/* Generate multiple questions */}
                <QuestionContext.Provider value={[questionArray, updateQuestionArray]}>
                    {/* Map over question array */}
                    {questionArray.map(
                        question => {
                            return <Question key={question.number} number={question.number} selectionCallback={getQuestionSelection} contentCallback={getQuestionContent} />
                        }
                    )}
                </QuestionContext.Provider>
                <div className="addQuestion">
                    <button onClick={() => addQuestion()}>Add Question</button>
                </div>
                <div className="submitButton">
                    <button onClick={() => handleSubmit()}>Submit Quiz</button>
                </div>
                <div className="cancelButton">
                    <button onClick={() => handleCancel()}>Cancel</button>
                </div>
            </form>
        </>
    )
}