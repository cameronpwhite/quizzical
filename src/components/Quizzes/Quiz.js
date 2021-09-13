import React, { useEffect, useState } from 'react'
import QuizRepository from '../../data/QuizRepository.js'


export const Quiz = () => {

const [quizzes, updateQuizzes] = useState([])

useEffect(() => {
    QuizRepository.getAllQuizzes()
    .then((data) => updateQuizzes(data))
}, [])

return (
    <>
    <ul>
    {quizzes.map(quiz => {
        return <li>{quiz.quizName}</li>
    })}
    </ul>
    </>
)










    // let fetchedQuizzes = [];

    // fetch("http://localhost:8088/quizzes")
    // .then(r => r.json())
    // .then((data) => fetchedQuizzes = data)

    // const quizzesList = fetchedQuizzes.map((quiz) => {
    //     return <li>{quiz.quizName}</li>
    // })
    //     return (
    //         <ul>{ quizzesList }</ul>
    //     )
}