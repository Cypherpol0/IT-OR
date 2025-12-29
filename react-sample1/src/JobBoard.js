import React from "react";

const JobBoard = () => {
  const jobCount = 5;
  const companyName = "TotallyTechCorp";


  const getJobMessage = () => {
    if (jobCount === 0) {
      return "No job openings at the moment.";
    } else {
      return `We have ${jobCount} job opening(s) at ${companyName}! We expect to have ${Math.round(jobCount * 1.5)} openings next month.`;
    }
  }

  return (
    <div className="job-board">
      <h1>Job Board</h1>
      <p>Welcome to the job board of {JobBoard.companyName}</p>
      <p>{getJobMessage()}</p>
    </div>
  );
}

export default JobBoard;