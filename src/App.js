import React, { useEffect, useState } from 'react'
import Question from './components/Question'
import CategorySelector from './components/CategorySelector'
import ResultModal from './components/ResultModal'
import Scoreboard from './components/Scoreboard'
import './App.css'

export default function App() {
  const [question, setQuestion] = useState(null)
  useEffect(() => {
    getQuestion()
  }, [])
  function getQuestion() {
    const url = 'https://opentdb.com/api.php?amount=1'

    fetch(url).then((res) =>
      res.json().then((data) => {
        console.log(data)
      })
    )
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {/* <ResultModal /> */}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector />
        <Scoreboard />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        <Question />
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button>Go to next question 👉</button>
      </div>
    </div>
  )
}
