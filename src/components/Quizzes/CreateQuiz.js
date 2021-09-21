import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import TypeRepository from '../../data/TypeRepository'
import {Question} from './Question'
import CategoriesRepository from  '../../data/CategoriesRepository'
import { QuestionContext } from './QuestionContext'
import UserRepository from '../../data/UserRepository'
import { QuizForm } from './QuizForm'



export const CreateQuiz = () => {

    const [quizForm, toggleQuizForm] = useState(true)


// POST UP quiz, get the category and quiz name and user Id
// THEN fetch it back so you can assign it to those questions.
// const handleCreateQuiz {

// }

    return (
        <>

            <button>Create New Quiz</button>
            <QuizForm toggled = {quizForm} />

        </>
    )
}