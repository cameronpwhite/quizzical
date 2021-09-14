import React, { useState, useEffect } from 'react'



export const CreateQuiz = () => {

    return (
        <>
            <h1>Create a Quiz</h1>
            <div className="quiz-form"></div>
            <label htmlFor="quizName">Quiz Name</label>
            <input
                type="text"
                required
                autoFocus
                className="form-control"
                id="quizName"
                placeholder="Quiz name"
            />
            {/* Generate multiple questions */}
            <h2>Question</h2>
            <div className='form-questionContent'>
                <label htmlFor="questionContent">Question:  </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    id="quizName"
                    placeholder="Question"
                />
            </div>
            <label htmlFor="selectionType">Selection Type:  </label>
            <label htmlFor="multipleChoice">Multiple Choice</label>
            <input
                type="radio"
                required
                className="form-control"
                id="multipleChoice"
                placeholder="Selection Type"
                checked
            />
            <label htmlFor="trueFalse">True/False</label>
            <input
                type="radio"
                required
                className="form-control"
                id="trueFalse"
                placeholder="Selection Type"
            />
            <label htmlFor="fillinBlank">Fill-in Blank</label>
            <input
                type="radio"
                required
                className="form-control"
                id="fillinBlank"
                placeholder="Selection Type"
            />
            <div className="form-possibleAnswers">
                <label htmlFor="possibleAnswers">Possible Answers:</label>
            <input
                type="text"
                required
                className="form-control"
                id="possibleAnswer"
                placeholder="Answer 1"
            />
            <input
                type="text"
                required
                className="form-control"
                id="quizName"
                placeholder="Answer 2"
            />
            <input
                type="text"
                required
                className="form-control"
                id="quizName"
                placeholder="Answer 3"
            />
            <input
                type="text"
                required
                className="form-control"
                id="quizName"
                placeholder="Answer 4"
            />
            </div>
            <div className="form-category">
                <label htmlFor="categories">Category:</label>
                <label htmlFor="categoryHistory">History</label>
                <input
                type="radio"
                required
                className="form-control"
                id="categoryHistory"
                placeholder="Category"
                checked
                />
                <label htmlFor="categoryScience">Science</label>
                <input
                type="radio"
                required
                className="form-control"
                id="categoryScience"
                placeholder="Category"
                />
                <label htmlFor="categoryMath">Math</label>
                <input
                type="radio"
                required
                className="form-control"
                id="categoryMath"
                placeholder="Category"
                />
            </div>
            <div className="addQuestion">
                <button>Add Question</button>
            </div>
            <div className="submitButton">
                <button>Submit Quiz</button>
            </div>
            <div className="cancelButton">
                <button>Cancel</button>
            </div>
        </>
    )
}