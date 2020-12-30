import React from 'react'
import difficultyList from '../options/difficulty'

export default function DifficultySelector({ difficulty, chooseDifficulty }) {
  return (
    <div className="difficulty-selector">
      <p>Select Difficulty</p>

      <button className="button-difficult">
        <select
          value={difficulty}
          onChange={(e) => chooseDifficulty(e.target.value)}
        >
          {difficultyList.map((difficulty, index) => (
            <option
              key={index}
              value={difficulty.id}
              dangerouslySetInnerHTML={{ __html: difficulty.name }}
            />
          ))}
        </select>
      </button>
    </div>
  )
}
