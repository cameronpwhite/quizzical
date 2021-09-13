import React from 'react'
import { Quiz } from './Quizzes/Quiz'
import { Navbar } from './Navbar/Navbar'

export const Quizzical = () => {
    // const [quizzes, updateQuizzes] = useState([])

    return (
        <>
        <Navbar />
        <h1>Welcome to Quizzical</h1>
        <h2>Featured Quizzes</h2>
        <Quiz />
        </>
    )
    
    
}