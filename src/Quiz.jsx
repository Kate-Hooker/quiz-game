import { useState } from 'react'

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [answerIdx, setAnswerIdx] = useState(null)
  const [answer, setAnswer] = useState(null)

  const onClickNext = () => {
    setAnswerIdx(null)
    setAnswer(null)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const { question, choices, correctAnswer } = questions[currentQuestion]

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index)
    if (answer === correctAnswer) {
      setAnswer(true)
    } else {
      setAnswer(false)
    }
  }

  return (
    <div className="quiz-container">
      <>
        <span className="active-question-no">{currentQuestion + 1}</span>
        <span className="total-questions">/{questions.length}</span>
        <h2>{question}</h2>
        <ul>
          {choices.map((answer, index) => (
            <li
              onClick={() => onAnswerClick(answer, index)}
              key={answer}
              className={answerIdx === index ? 'selected-answer' : null}
            >
              {answer}
            </li>
          ))}
        </ul>
        <div className="footer">
          <button onClick={onClickNext} disabled={answerIdx === null}>
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </>
    </div>
  )
}

export default Quiz
