import React from 'react'
import './App.css'

const Quiz = () => {
    //const [quiz_position, setQuiz_position] = useState(1);

    const quizData = require('./quiz_data.json');

    return (
        <div>
            <div className="QuizQuestion">
                {quizData.quiz_questions[0].instruction_text}
            </div>
        </div>
    );
}

export default Quiz