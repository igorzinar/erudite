import React, { useEffect, useState } from 'react'
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
  useEffect(() => {
    getQuestion()
  }, [selectedCategory, selectedDifficulTyes])

  function getQuestion() {
    let url = 'https://opentdb.com/api.php?amount=1'
    if (selectedCategory !== 'any') url += `&category=${selectedCategory}`
    if (selectedDifficulTyes !== 'Medium')
      url += `&difficulty=${selectedDifficulTyes}`
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestion(data.results[0]))
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {/* <ResultModal /> */}
      <Scoreboard />
      {/* question header ----------------------- */}
      <div className="question-header">
        <div className="select-container">
          <CategorySelector
            category={selectedCategory}
            chooseCategory={setSelectedCategory}
          />
          <DifficultySelector
            difficulty={selectedDifficulTyes}
            chooseDifficulty={setSelectedDifficulTyes}
          />
        </div>
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && <Question question={question} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button>Go to next question ➽</button>
      </div>
    </div>
  )
}
