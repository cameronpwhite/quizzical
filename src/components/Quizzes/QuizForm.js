import React, { useState, useEffect, useContext } from 'react'

import { Question } from './Question'

import { QuestionContext } from './QuestionContext'

import { QuizContext } from './QuizContext'

import Settings from '../../data/Settings'
import { fetchIt } from '../../data/Fetch'


export const QuizForm = ({ quizId }) => {

    const [quizData, updateQuiz] = useState({
        quizId: quizId,
        quizName: "",
        categoryId: "",
        userId: 0
    })


    const [questionArray, updateQuestionArray] = useState([{
        number: 1,
        quizId
    }
    ])

    fetchIt(`${Settings.remoteURL}/questions`, `POST`, JSON.stringify(questionArray[0]))

    const [quizForm, toggleQuizForm] = useContext(QuizContext)

    const addQuestion = () => {
        // Before adding a question, post Quiz to database?
        // If Quiz is canceled, DELETE from database.
        // When submitting, assign all those questions for the quiz to the QuizId in database.


        const newQuestion = {
            number: questionArray.length + 1,
            quizId: quizId
            // questionTypeId:
            // content:
        }
        // Fill out all data before addquestion can be pressed
        // Post question when 'Addquestion is pressed'
        // Fetch the question array

        fetchIt(`${Settings.remoteURL}/questions`, `POST`, JSON.stringify(newQuestion))
        .then()

        updateQuestionArray(questionArray => [...questionArray, newQuestion])
        console.log(questionArray)
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
        console.log(quizData)
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
                            return <Question key={question.number} number={question.number} />
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