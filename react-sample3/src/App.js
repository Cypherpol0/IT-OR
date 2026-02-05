import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { JobColumn } from './components/JobColumn';
import {useState, useEffect} from 'react';
import toDoIcon from './images/ToDO.jpg';
import inProgressIcon from './images/InProgress.png';
import doneIcon from './images/Done.png';
import stopIcon from './images/stopIcon.jpg';
import { JobForm } from './components/JobForm';

const prevJob = JSON.parse(localStorage.getItem('jobs')) || [];
console.log(prevJob);

function App() {
  const initialJobs = prevJob.length > 0 ? prevJob : [];
  const [jobs, setJobs] = useState(initialJobs);

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const deleteJob = (index) => {
    const newJobs = jobs.filter((job, i) => i !== index);
    setJobs(newJobs);
  }
  console.log(jobs);
  return (
    <div className="App">
    <Header />
    <JobForm setJobs={setJobs} />
    <main className="headerfunction">
      <JobColumn 
          title="Need to Start" 
          image={toDoIcon} 
          jobStatus="start"
          alt="To-do icon" 
          jobs={jobs}
          deleteJob={deleteJob}
      />

      <JobColumn 
        title="In Progress"
        image={inProgressIcon}
        jobStatus="inProgress"
        alt="In Progress icon"
        jobs={jobs}
        deleteJob={deleteJob}
      />

      <JobColumn 
        title="Completed"
        image={doneIcon}
        jobStatus="completed"
        alt="Done icon"
        jobs={jobs}
        deleteJob={deleteJob}
      />

      <JobColumn 
        title="Jobs Stopped"
        image={stopIcon}
        jobStatus="stopped"
        alt="Stopped icon"
        jobs={jobs}
        deleteJob={deleteJob}
      />
    </main>
    <Footer />
    </div>
  );
}

export default App;
