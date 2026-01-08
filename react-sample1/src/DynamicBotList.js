import React from 'react';
import { useState } from 'react';

const DynamicBotList = () => {
  const [newBot, setNewBot] = useState({ id: "", name: "", status: "Running", task: "" });
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

  const deleteBot = (id) => {
    setBots(bots.filter(bot => bot.id !== id));
    console.log(`Bot with ID ${id} deleted.`);
  }

  const AddBot = () => {
    if((newBot.id.trim() && newBot.name.trim() && newBot.task.trim()) !== "") {
      setBots([...bots, newBot]);
      setNewBot({ id: "", name: "", status: "Running", task: "" });
      console.log(`New bot added: ${JSON.stringify(newBot)}`);
    }
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
        {bots.map(bot =><li key={bot.id}><span>{bot.name} - {StyledStatus(bot.status)} - {bot.task}<button onClick={() => triggerJob(bot.id)}>Change status</button><button onClick={() => deleteBot(bot.id)}>Delete bot</button></span></li>)}
      </ul>
      <br />
      <button onClick={AddBot}>Add Bot</button>
      <br />
      <br />
      <input type = "text" placeholder="Enter Bot ID" value={newBot.id} onChange={(e) => setNewBot({...newBot, id: e.target.value})} />
      <input type = "text" placeholder="Enter Bot Name" value={newBot.name} onChange={(e) => setNewBot({...newBot, name: e.target.value})} />
      <input type = "text" placeholder="Enter Bot Task" value={newBot.task} onChange={(e) => setNewBot({...newBot, task: e.target.value})} />
    </div>
  );
}

export default DynamicBotList;