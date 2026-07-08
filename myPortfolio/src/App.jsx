import { Header } from './components/Header/Header';
import { Intro } from './components/Body/About/Intro';
import { Experience } from './components/Body/Experience/Experience';
import { Projects } from './components/Body/Projects/Projects';
import { Contact } from './components/Body/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <Intro />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer /> 
    </div>
  )
}

export default App
