import React, {Component} from 'react'
import './App.css'

const quizData = require('./quiz_data.json');

class Quiz extends Component{
    //const [quiz_position, setQuiz_position] = useState(1);
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div className="QuizQuestion">
                    {quizData.quiz_questions[0].instruction_text}
                </div>
            </div>
        );
    }
}

export default Quiz