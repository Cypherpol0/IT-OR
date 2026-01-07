import React from 'react';
import { useState } from 'react';

const DynamicBotList = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
  ]);

  const triggerJob = (id) => {
    const currentStatus = {"Running" : "Stopped", "Stopped" : "Completed", "Completed" : "Running"};
    setBots(bots.map(bot => 
      bot.id === id ? { ...bot, status: currentStatus[bot.status] } : bot
    ));
    console.log(`Bot with ID ${id} triggered.`);
  };

  const StyledStatus = (status) => {
    const style = {
      color: status === "Running" ? "green" : status === "Completed" ? "blue" : "red",
      fontWeight: "bold"
    };
    return <span style={style}>{status}</span>;
  }


   return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <ul>
        {bots.map(bot =><li key={bot.id}><span>{bot.name} - {StyledStatus(bot.status)} - {bot.task}<button onClick={() => triggerJob(bot.id)}>Change status</button></span></li>)}
      </ul>
    </div>
  );
}

export default DynamicBotList;