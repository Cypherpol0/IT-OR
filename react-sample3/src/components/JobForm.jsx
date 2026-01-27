import React from 'react'
import './JobForm.css'
import { FormButton } from './FormButton'

export const JobForm = () => {
  return (
    <div className='form-header'>
        <form>
            <input type="text" className="bot-input" placeholder='Enter Job Title' />
            <br />
            <div className='form-details'>
                <div className='bottom-line'>  
                    <FormButton value = "Read Emails"/>
                    <FormButton value = "Web Parsing"/>
                    <FormButton value = "Send Emails"/>
                </div>
            </div>
            <br />
            <select name="JobStatus" id="JobStatus" className='job-status'>
                <option value="start">Start Process</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="stopped">Stopped</option>
            </select>
            <button type="submit" className='submit-data'>Add Job</button>
        </form>
    </div>
  )
}
