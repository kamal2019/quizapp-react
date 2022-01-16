import React,{useContext} from 'react';
import { QuizContext } from '../Helper/Contexts';

export default function MainMenu() {
    const {gameState,setGameState} = useContext(QuizContext);

    return (
        <div className='Menu'>
            <h2>Lets begin the Quiz</h2>
            <button
             onClick={() => {setGameState("quiz")}}>StartQuiz</button>
        </div>
    )
}
