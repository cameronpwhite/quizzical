import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {Question} from './Question'
import CategoriesRepository from  '../../data/CategoriesRepository'
import { QuestionContext } from './QuestionContext'



export const QuizForm = ({ quizFormToggled }) => {

    const [quizData, updateQuiz] = useState({
        quizId: 0,
        quizName: "",
        categoryId: "",
        userId: 0
    })

    const [quizName, setQuizName] = useState("")
    const [questionArray, updateQuestionArray] = useState([])
    const [categories, updateCategories] = useState([])
    const [quizCategory, setQuizCategory] = useState("")
    const [currentUser, setCurrentUser] = useState("")
    const history = useHistory()


    useEffect(() => {
        CategoriesRepository.getAllCategories()
        .then(r => updateCategories(r))
        // .then(UserRepository.getCurrentUser())
        // .then(r => setCurrentUser(r))
        // .then(console.log(currentUser))
    }, []
    )

    const addQuestion = () => {
        // Before adding a question, post Quiz to database?
        // If Quiz is canceled, DELETE from database.
        // When submitting, assign all those questions for the quiz to the QuizId in database.
        const newQuestion = {
            number: questionArray.length + 1,
            quizId: 0
            // questionTypeId:
            // content:
        }
        // Fill out all data before addquestion can be pressed
        // Post question when 'Addquestion is pressed'
        // Fetch the question array
        updateQuestionArray(questionArray => [...questionArray, newQuestion])

    }

    const handleCancel = () => {
        history.push("/")
    }


return (
        <>
        { {quizFormToggled}
        ? "good soup"
        : ""}
    <form className="quizForm">
            <h1>Create a Quiz</h1>
                <div className="quiz-form"></div>
                <label htmlFor="quizName">Quiz Name:    </label>
                <input
                    type="text"
                    required
                    autoFocus
                    className="form-control"
                    onChange={e => setQuizName(e.target.value)}
                    id="quizName"
                    placeholder="Quiz name"
                />
                <div className="form--categories">
                <label htmlFor="categories">Category:</label>
                <br></br>
                {categories.map((category) => { return (
                    <>
                    <label htmlFor={`category--${category.name}`}>{`${category.name}`}</label>
                    <input
                        type="radio"
                        required
                        className="form-control"
                        id={`category--${category.name}`}
                        name="categoryGroup"
                        value={category.id}
                        onChange={e => setQuizCategory(e.target.value)}
                    />
                    <br></br>
                    </>)
                })}
                </div>
                {/* Generate multiple questions */}
                <QuestionContext.Provider value = {[questionArray, updateQuestionArray]}>
                    {/* Map over question array */}
                {questionArray.map(
                    question => {
                        return <Question number={question.number}/>
                    }
                )}
                </QuestionContext.Provider>
                <div className="addQuestion">
                    <button onClick={() => addQuestion()}>Add Question</button>
                </div>
                <div className="submitButton">
                    <button>Submit Quiz</button>
                </div>
                <div className="cancelButton">
                    <button onClick={() => handleCancel()}>Cancel</button>
                </div>
            </form>
        </>
)}