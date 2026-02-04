import React from 'react'
import { FormButton } from './FormButton'
import deleteIcon from '../images/deleteIcon.png'
import './JobStatus.css'

export const JobStatus = ({activityText, category, deleteJob}) => {
  return (
    <article className="job-status-article">
        <p className="job-status-text">{activityText}</p>
        <div className='job-box'>
            <div className='job-boxstatus'>
                {
                    category.map((cat, index) => (<FormButton key={index} value={cat} />))
                }
            </div>
            <div className='delete-job'>
                <button type="button" className='delete-button' onClick={deleteJob}>
                <img src={deleteIcon} alt="Delete" className='deleteImg' />
                </button>
            </div>
        </div>
      
    </article>
  )
}

