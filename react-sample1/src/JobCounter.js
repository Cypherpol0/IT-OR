import React from "react";

const JobCounter = () => {
    let jobCount = 0;

    const handleJobCount = () => {
        jobCount += 1;
        console.log(`Job count increased to: ${jobCount}`);
    }


    return (
        <div>
            <h1>Job Counter</h1>
            <p>Number of jobs: {jobCount}</p>
            <button onClick={handleJobCount}>Add Job</button>
        </div>
    );
}

export default JobCounter;