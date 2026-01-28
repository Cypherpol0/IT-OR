import React from 'react'
import { FormButton } from './FormButton'
import deleteIcon from '../images/deleteIcon.png'
import './JobStatus.css'

export const JobStatus = ({jobs}) => {
  return (
    <article className="job-status-article">
        <p className="job-status-text">{jobs}</p>
        <div className='job-box'>
            <div className='job-boxstatus'>
                <FormButton value = "Parse Emails"/>
                <FormButton value = "SAP Extraction"/>
            </div>
            <div className='delete-job'>
                <img src={deleteIcon} alt="Delete" className='deleteImg' />
            </div>
        </div>
      
    </article>
  )
}

