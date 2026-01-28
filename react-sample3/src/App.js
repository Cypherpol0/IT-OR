import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { JobColumn } from './components/JobColumn';
import toDoIcon from './images/ToDO.jpg';
import inProgressIcon from './images/InProgress.png';
import doneIcon from './images/Done.png';
import stopIcon from './images/stopIcon.jpg';

function App() {
  return (
    <div className="App">
    <Header />
    <main className="headerfunction">
      <JobColumn 
          title="Need to Start" 
          image={toDoIcon} 
          alt="To-do icon" 
      />

      <JobColumn 
        title="In Progress"
        image={inProgressIcon}
        alt="In Progress icon"
      />

      <JobColumn 
        title="Jobs Done"
        image={doneIcon}
        alt="Done icon"
      />

      <JobColumn 
        title="Jobs Stopped"
        image={stopIcon}
        alt="Stopped icon"
      />
    </main>
    <Footer />
    </div>
  );
}

export default App;
