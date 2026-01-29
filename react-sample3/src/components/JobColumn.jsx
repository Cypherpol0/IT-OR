import React from 'react'
import './JobColumn.css'
import { JobStatus } from './JobStatus';

export const JobColumn = ({ title, image, alt, jobStatus, jobs }) => {
  return (
    <div className="job-column">
      <h2 className="heading-status">
        {title}
        <img src={image} alt={alt} className="status-image" />
      </h2>
      <section className='column-section'>Job List</section>
      {
        jobs.map((job, index) => job.jobStatus === jobStatus && (<JobStatus
          key={index}
          activityText={job.activityText} 
          category={job.category} 
          />))
      }
    </div>
  );
}
