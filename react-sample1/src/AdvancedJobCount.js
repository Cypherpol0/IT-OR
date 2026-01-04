import React from "react";

const AdvancedJobCounter = () => {
    let [jobCount, setJobCount] = React.useState(0);

    const aHandleJobCount = () => {
        setJobCount(jobCount + 1);
        console.log(`Job count increased to: ${jobCount}`);
    }

    const aRemoveJobCount = () => {
        if (jobCount > 0) {
            setJobCount(jobCount - 1);
            console.log(`Job count decreased to: ${jobCount}`);
        }
    }

    const aResetJobCount = () => {
        setJobCount(0);
        console.log(`Job count reset to: ${jobCount}`);
    }

    const numOfJobs = () => {
        if (jobCount === 0) {
            return "No job openings at the moment.";
        } else if (jobCount > 0 && jobCount < 6) {
            return "There are a few job openings.";
        } else {
            return `There are ${jobCount} job openings.`;
        }
    };

    return (
        <div>
            <h1>Advanced Job Counter</h1>  
            <p>Number of jobs: {jobCount}</p>
            <p>{numOfJobs()}</p>
            <button onClick={aHandleJobCount}>Add Job</button>
            <button onClick={aRemoveJobCount}>Remove Job</button>
            <button onClick={aResetJobCount}>Reset Jobs</button>
        </div>
    );
}

export default AdvancedJobCounter;