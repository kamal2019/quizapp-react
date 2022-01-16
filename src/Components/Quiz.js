import React, { useState,useContext } from 'react';
import { QuizContext } from '../Helper/Contexts';
import { Questions } from '../Helper/QuestionBank';

export default function Quiz() {
    const {score,setScore,setGameState} = useContext(QuizContext);
    const [currQuestion, setcurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const nextquestion = ()=>{
        if (Questions[currQuestion].answer == optionChosen){
            setScore(score+1);
        }
        // alert(score)
        setcurrQuestion(currQuestion+1);
    }
    const finishQuiz = ()=>{
        if (Questions[currQuestion].answer == optionChosen){
            setScore(score+1);
        }
        setGameState("endScreen")
    }
    return (
        <div className='Quiz'>
            <h1>
                {Questions[currQuestion].prompt}
            </h1>
            <div className='options'>
                <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion == Questions.length-1 ? (<button onClick={finishQuiz}>Finish Quiz</button>) : <button onClick ={nextquestion}>Next</button> }
        </div>
    )
}
