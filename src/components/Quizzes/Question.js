import React, { useState, useEffect, useContext } from 'react'
import CategoriesRepository from '../../data/CategoriesRepository'
import { QuestionContext } from './QuestionContext'
import { TrueFalse} from './../Answers/TrueFalse'
import  {MultipleChoice} from '../Answers/MultipleChoice'
import {FillinBlank} from './../Answers/FillinBlank'
import TypeRepository from '../../data/TypeRepository'

export const Question = ({ number }) => {
    
    const [questionContent, setQuestionContent] = useState("")
    const [selectionTypes, updateSelectionTypes] = useState([])
    const [selectionType, setSelectionType] = useState("")
    const [questionArray, updateQuestionArray] = useContext(QuestionContext)

    const generateAnswerForm = (selectionType) => {
        
        switch(selectionType) {
            case '1': 
            return <TrueFalse questionNumber = {number} />
            break;
            
            case '2':
            return <FillinBlank questionNumber = {number}/>
            break;

            case '3':
            return <MultipleChoice questionNumber = {number}/>
            break;

            default:
                return null;
        }
    }

    const removeQuestion = (questionObj) => {

        console.log(questionObj)
        const foundQuestion = questionArray.find(
            question => {
                return question.number === questionObj.number
            }
        )

        const newQuestionArray = questionArray.filter(
            question => {
                return question.number !== foundQuestion.number
            }
        )

        const newer = newQuestionArray.map(
            (question, index) => {
                question.number = index + 1
                return question
            }
            )
            updateQuestionArray(newer)
    }
        
        
    return (
        <>
            <h2>Question {number}</h2>
            <div className='form-questionContent'>
                <label htmlFor="questionContent">Question:  </label>
                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={e => setQuestionContent(e.target.value)}
                    id="questionContent"
                    placeholder="Question"
                />
            </div>
            <label htmlFor="selectionType">Selection Type:  </label>
            <label htmlFor={`multipleChoice--${number}`}>Multiple Choice</label>
            <input
                type="radio"
                required
                className="form-control"
                id={`multipleChoice--${number}`}
                value="3"
                name={`selectForQuestion--${number}`}
                onChange={e => setSelectionType(e.target.value)}
            />
            <label htmlFor={`trueFalse--${number}`}>True/False</label>
            <input
                type="radio"
                required
                className="form-control"
                id={`trueFalse--${number}`}
                value="1"
                name={`selectForQuestion--${number}`}
                onChange={e => setSelectionType(e.target.value)}
            />
            <label htmlFor={`fillinBlank--${number}`}>Fill-in Blank</label>
            <input
                type="radio"
                required
                className="form-control"
                id={`fillinBlank--${number}`}
                value="2"
                name={`selectForQuestion--${number}`}
                onChange={e => setSelectionType(e.target.value)}
            />
            
            {generateAnswerForm(selectionType)}

            { number !== 1 ? (<div className="removeQuestion">
                    <button id={`removeQuestion--${number}`} onClick={(e) => removeQuestion({number}, e)}>Remove Question</button>
            </div>)
            : "" 
            }
        </>)
}