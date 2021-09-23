import React from 'react'
import { Quiz } from './Quizzes/Quiz'
import { Navbar } from './Navbar/Navbar'
import { Route, Redirect, Router } from 'react-router-dom'
import useSimpleAuth from '../hooks/UseSimpleAuth'
import Login from './Auth/Login'
import { Register } from './Auth/Register'
import { ApplicationViews } from '../ApplicationViews'
import { QuestionContext } from './Quizzes/QuestionContext'

export const Quizzical = () => {
    const { isAuthenticated } = useSimpleAuth()

    return <>
        <Route render={() => {
            if (isAuthenticated()) {
            return <>
            <Navbar />
            <ApplicationViews />
             </>
            } else {
                return <Redirect to="/login" />
            }
        }} />
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
}
