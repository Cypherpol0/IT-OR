import React from 'react'
import './JobColumn.css'
import { JobStatus } from './JobStatus';

export const JobColumn = ({ title, image, alt }) => {
  return (
    <div className="job-column">
      <h2 className="heading-status">
        {title}
        <img src={image} alt={alt} className="status-image" />
      </h2>
      <section className='column-section'>Section 1</section>
      {
        <JobStatus />
      }
    </div>
  );
}
