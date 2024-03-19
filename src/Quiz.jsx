import { useState } from 'react'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState()

  const { question, choices, correctAnswer } = questions[currentQuestion]

  return (
    <div className="quiz-container">
      <>
        <span className="active-question-no">{currentQuestion + 1}</span>
        <span className="totalQuestions">{question.length}</span>
      </>
    </div>
  )
}

export default Quiz
