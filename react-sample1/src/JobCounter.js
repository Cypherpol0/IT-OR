import React from "react";

const JobCounter = () => {
    let jobCount = 0;

    return (
        <div>
            <h1>Job Counter</h1>
            <p>Number of jobs: {jobCount}</p>
            <button onClick={incrementJobCount}>Add Job</button>
        </div>
    );
}