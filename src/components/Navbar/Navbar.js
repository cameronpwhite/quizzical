import React from 'react'
import { Link } from "react-router-dom"
import useSimpleAuth from '../../hooks/UseSimpleAuth'

export const Navbar = (props) => {
    const {logout} = useSimpleAuth()
    const {isAuthenticated} = useSimpleAuth()
    const {getCurrentUser} = useSimpleAuth()

    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top onTop">
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Quizzical<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myquizzes">My Quizzes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/createquiz">Create Quiz</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            {
                                isAuthenticated()
                                    ? <Link onClick={() => {
                                        logout()
                                    }} className="nav-link" to="/login">Logout {getCurrentUser().displayName}</Link>
                                    : <Link className="nav-link" to="/login">Login</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                !isAuthenticated()
                                    ? <Link className="nav-link" to="/register">Register</Link>
                                    : ""
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
