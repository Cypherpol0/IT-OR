import React from 'react'
import './FormButton.css'

export const FormButton = ({ value, selectCategory, select }) => {
  const addCss = {
    'Read Emails': { backgroundColor: '#f08080' },
    'Web Parsing': { backgroundColor: '#add8e6' },
    'Send Emails': { backgroundColor: '#90ee90' },
    default: { backgroundColor: 'white' }
  }
  const style = select ? (addCss[value] || addCss.default) : {}
  return (
    <div>
      <button
        type="button"
        style={style}
        className="cat"
        onClick={() => selectCategory(value)}
      >
        {value}
      </button>
    </div>
  )
}
