import { useState } from 'react'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState()

  return (
    <div className="quiz-container">
      <>
        <span className="active-question-no"></span>
      </>
    </div>
  )
}

export default Quiz
