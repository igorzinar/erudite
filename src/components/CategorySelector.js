import React from 'react'
import categories from '../options/categories'

export default function CategorySelector({ category, chooseCategory }) {
  return (
    <div className="category-selector">
      <p>Select Category</p>
      <button className="button-category">
        <select
          value={category}
          onChange={(e) => chooseCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option
              key={index}
              value={category.id}
              dangerouslySetInnerHTML={{ __html: category.name }}
            />
          ))}
        </select>
      </button>
    </div>
  )
}
