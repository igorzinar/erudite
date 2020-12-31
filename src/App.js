import React, { useEffect, useState, useCallback } from 'react'
import Question from './components/Question'
import CategorySelector from './components/CategorySelector'
import ResultModal from './components/ResultModal'
import Scoreboard from './components/Scoreboard'
import DifficultySelector from './components/DifficultySelector'
import './App.css'

export default function App() {
  const [question, setQuestion] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('any')
  const [selectedDifficulTyes, setSelectedDifficulTyes] = useState('medium')
  const [isCorrect, setIsCorrect] = useState(null)
  const [correctScore, setCorrectScore] = useState(0)
  const [wrongScore, setWrongScore] = useState(0)

  const getQuestion = useCallback(() => {
    setIsCorrect(null)

    let url = 'https://opentdb.com/api.php?amount=1'
    if (selectedCategory !== 'any') url += `&category=${selectedCategory}`
    if (selectedDifficulTyes !== 'Medium')
      url += `&difficulty=${selectedDifficulTyes}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data.results[0]))
  }, [selectedCategory, selectedDifficulTyes])

  useEffect(() => {
    getQuestion()
  }, [getQuestion, selectedCategory, selectedDifficulTyes])

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === question.correct_answer
    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) setCorrectScore((score) => score + 1)
    else setWrongScore((score) => score + 1)
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          question={question}
          getQuestion={getQuestion}
        />
      )}
      <Scoreboard correct={correctScore} wrong={wrongScore} />
      {/* question header ----------------------- */}
      <div className="question-header">
        <div className="select-container">
          <DifficultySelector
            difficulty={selectedDifficulTyes}
            chooseDifficulty={setSelectedDifficulTyes}
          />
          <CategorySelector
            category={selectedCategory}
            chooseCategory={setSelectedCategory}
          />
        </div>
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && (
          <Question
            question={question}
            answerQuestion={handleQuestionAnswered}
          />
        )}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={getQuestion}>Go to next question ➽</button>
      </div>
    </div>
  )
}
