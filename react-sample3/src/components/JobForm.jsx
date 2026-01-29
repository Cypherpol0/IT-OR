import React from 'react'
import './JobForm.css'
import { FormButton } from './FormButton'
import { useState } from 'react'
export let callAddJob;

export const JobForm = ({setJobs}) => {
  const [activity, setActivity] = useState({
    activityText: '',
    jobStatus: 'start',
    category: []
  })
  
  const callFunctionForm = (e) => {
    const name=e.target.name;
    const value=e.target.value;
    setActivity(ini =>{
      return {...ini, [name]:value}
    });
  }
  const callSubmitForm = (e) => {
    e.preventDefault()
    console.log(activity)
    setJobs(prev =>{
      return [...prev, activity]
    })
  }; 

  const validateCategory = (cat) => {
    return activity.category.some(item => item === cat);
  }

  const selectCategory = (cat) => {
    if(activity.category.some(item => item === cat)){
      const filteredCategories = activity.category.filter(item => item !== cat);
      setActivity(prev => {
        return {...prev,  category: filteredCategories}
      })
    } else {
      setActivity(prev => {
        return {...prev, category:[...prev.category, cat]}
      });
    }
  }

  return (
    <div className='form-header'>
        <form className='job-form' onSubmit={callSubmitForm}>
            <input name="activityText" type="text" className="bot-input" placeholder='Enter Job Title' onChange={callFunctionForm}/>
            <br />
            <div className='form-details'>
                <div className='bottom-line'>  
                    <FormButton value = "Read Emails" selectCategory={selectCategory} select={validateCategory("Read Emails")}/>
                    <FormButton value = "Web Parsing" selectCategory={selectCategory} select={validateCategory("Web Parsing")}/>
                    <FormButton value = "Send Emails" selectCategory={selectCategory} select={validateCategory("Send Emails")}/>
                </div>
            </div>
            <br />
            <select name="jobStatus" id="jobStatus" className='job-status' onChange={callFunctionForm}>
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
