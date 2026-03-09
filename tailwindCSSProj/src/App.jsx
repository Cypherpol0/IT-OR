import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <h1 className='bg-purple-500 text-white p-4 rounded-2xl'>Hello, Tailwind CSS!</h1>
      <br />
      <Cards Service="Modern Design Solutions" />
      <Cards Service="Regulations Technology" />
      <Cards Service="Marketing Ad Services" />
    </>
  )  
}
 
export default App
