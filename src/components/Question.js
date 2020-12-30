import React from 'react'
import shuffle from 'lodash.shuffle'

const sampleAnswers = ['One', 'Two', 'Three', 'Four']

export default function Question({ question }) {
  const answers = shuffle([
    ...question.incorrect_answers,
    question.correct_answer,
  ])
  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  )
}
