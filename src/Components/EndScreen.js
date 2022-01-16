import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { QuizContext } from '../Helper/Contexts';
import {Questions} from '../Helper/QuestionBank'

export default function EndScreen() {
    const {score ,setGameState,setScore} = useContext(QuizContext);
    const gotomain= () =>{
        setScore(0);
        setGameState("menu")
    }
    return (
        <div className='EndScreen'> 
            <h1>Quiz Result</h1>
            <h3>Your score is {score} / {Questions.length}</h3>
            <button onClick={gotomain}>Restart Quiz</button>
        </div>
    )
}
