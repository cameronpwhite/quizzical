import React from 'react'
import { Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import { Register } from './components/Auth/Register'
import {Quiz} from './components/Quizzes/Quiz'
import {CreateQuiz} from './components/Quizzes/CreateQuiz'
import {MyQuizzes} from './components/MyQuizzes/MyQuizzes'


export const ApplicationViews = () => {
    return (
        <>
        <Route exact path="/login">
            <Login />
        </Route>
        

        <Route path="/register">
            <Register />
        </Route>

        <Route path="/createquiz">
            <CreateQuiz />
        </Route>

        <Route path="/myquizzes">
            <MyQuizzes />
        </Route>

        <Route exact path ="/">
        <h1>Welcome to Quizzical</h1>
        <h2>Featured Quizzes</h2>
        <Quiz />
        </Route>
        </>
    )
}