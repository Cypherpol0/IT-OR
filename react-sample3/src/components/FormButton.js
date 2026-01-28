import React from 'react'
import './FormButton.css'

export const FormButton = ({ value, selectCategory, select }) => {

  return (
    <div>
      <button type="button" className="tag" onClick={() => selectCategory(value)}>{value}</button>
    </div>
  )
}
