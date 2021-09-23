import React, { useEffect, useState } from 'react'
import { fetchIt } from '../../data/Fetch'
import useSimpleAuth from '../../hooks/UseSimpleAuth'
import Settings from '../../data/Settings'

export const MyQuizzes = () => {


    const [currentUserId, setCurrentUserId] = useState(0)
    const [userQuizzes, updateUserQuizzes] = useState([])
    const { getCurrentUser } = useSimpleAuth()

    useEffect(() => {

        const currentUser = getCurrentUser()
        setCurrentUserId(currentUser.id)

        fetchIt(`${Settings.remoteURL}/quizzes/?userId=${currentUserId}`)
        .then(res => updateUserQuizzes(res))
        .then(console.log(userQuizzes))
        
    }, [currentUserId])




    return (
        <>
        <h1>My Quizzes</h1>
        <ul>
        {userQuizzes.map(
            quiz => {
                return <li key={quiz.quizId}>{quiz.quizName}</li>
            }
        )}
        </ul>
        </>
    )
}