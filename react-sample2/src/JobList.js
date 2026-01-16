import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs }) => {
   const [dispBot, setDispBot] = useState({ id: "", name: "", status: "Running", task: "" });
   const DispBot = () => {
        for (bot in bots) {
            if(dispBot.status === "Running") {
            setBots([...bots, dispBot]);
            setDispBot({ id: "", name: "", status: "Running", task: "" });
            console.log(`New bot added: ${JSON.stringify(dispBot)}`);
            }
        }
   };

   const StyledStatus = (status) => {
    const style = {
      color: status === "Running" ? "green" : "black",
      fontWeight: "bold"
    };
    return <span style={style}>{status}</span>;
   }

  return (
    <div className="job-list">
        <h1>Job List</h1>
        <ul>
         {bots.map(bot =><li key={bot.id}><span>{bot.name} - {StyledStatus(bot.status)} - {bot.task}</span></li>)}
        </ul>
    </div>
  );
};

export default JobList;