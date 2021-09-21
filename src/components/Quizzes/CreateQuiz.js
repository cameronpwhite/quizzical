import React, { useState, useEffect } from 'react'
import CategoriesRepository from '../../data/CategoriesRepository'
import { QuizForm } from './QuizForm'
import { QuizContext } from './QuizContext'
import { fetchIt } from '../../data/Fetch'
import Settings from '../../data/Settings'
import useSimpleAuth from '../../hooks/UseSimpleAuth'

export const CreateQuiz = () => {

    const [quizForm, toggleQuizForm] = useState(false)
    const [quizName, setQuizName] = useState("")
    const [categories, updateCategories] = useState([])
    const [quizCategory, setQuizCategory] = useState("")
    const [quizId, setQuizId] = useState(0)

    const { getCurrentUser } = useSimpleAuth()

    useEffect(() => {
        CategoriesRepository.getAllCategories()
            .then(r => updateCategories(r))
        // .then(UserRepository.getCurrentUser())
        // .then(r => setCurrentUser(r))
        // .then(console.log(currentUser))
    }, []
    )



    // POST UP quiz, get the category and quiz name and user Id
    // THEN fetch it back so you can assign it to those questions.
    // const handleCreateQuiz {

    const handleCreateQuiz = () => {
        if (!quizName && !quizCategory) {
            console.log("Needs a name and category")
        } else if (quizName && quizCategory) {

            toggleQuizForm(!quizForm)

            const currentUser = getCurrentUser()

            const newQuiz = {
                quizName: quizName,
                categoryId: parseInt(quizCategory),
                userId: currentUser.id
            }

            fetchIt(`${Settings.remoteURL}/quizzes`, `POST`, JSON.stringify(newQuiz))
            .then(r => setQuizId(r.id))

        }
    }

    return (
        <><h1>Create a Quiz</h1>
            <div className="quiz-form"></div>
            <label htmlFor="quizName">Quiz Name:    </label>
            { quizForm
                ? <input
                    type="text"
                    required
                    autoFocus
                    className="form-control"
                    onChange={e => setQuizName(e.target.value)}
                    id="quizName"
                    placeholder="Quiz name"
                    disabled
                />
                : <input
                    type="text"
                    required
                    autoFocus
                    className="form-control"
                    onChange={e => setQuizName(e.target.value)}
                    id="quizName"
                    placeholder="Quiz name"
                />
            }

            <div className="form--categories">
                <label htmlFor="categories">Category:</label>
                <br></br>
                {categories.map((category) => {
                    return (
                        <>
                            <label htmlFor={`category--${category.name}`}>{`${category.name}`}</label>
                            {quizForm
                                ? <input
                                    type="radio"
                                    required
                                    className="form-control"
                                    id={`category--${category.name}`}
                                    name="categoryGroup"
                                    value={category.id}
                                    onChange={e => setQuizCategory(e.target.value)}
                                    disabled
                                />
                                : <input
                                    type="radio"
                                    required
                                    className="form-control"
                                    id={`category--${category.name}`}
                                    name="categoryGroup"
                                    value={category.id}
                                    onChange={e => setQuizCategory(e.target.value)}
                                />
                            }

                            <br></br>
                        </>)
                })}
            </div>
            { quizForm
                ? <><QuizContext.Provider value={[quizForm, toggleQuizForm]}>
                    <QuizForm quizId={quizId} />
                </QuizContext.Provider></>
                : <button onClick={() => handleCreateQuiz()}>Create New Quiz</button>}

        </>
    )
}