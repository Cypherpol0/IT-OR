import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [numAllow, setNumAllow] = useState(true);
  const [charAllow, setCharAllow] = useState(true);
  const [pass, setPassword] = useState("");

  const passwordasRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    const strdata = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    let password = "";
    let allowedChars = strdata;

    if (numAllow) {
      allowedChars += nums;
    }

    if (charAllow) {
      allowedChars += "!£@#$%^&*-+";
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars.charAt(randomIndex);
    }

    setPassword(password);
  }, [length, numAllow, charAllow, setPassword]);

  const copyFunction = useCallback(() => {
    passwordasRef.current?.select();
    navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-3xl mx-auto p-4 m-4 shadow-lg rounded-lg bg-gray-600">
        <h1>Password Generator</h1>
        <div className="flex shadow rounded-lg gap-4 overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            readOnly
            className="w-full p-2 text-center text-lg font-bold bg-gray-700 text-white"
            placeholder='Password'
            ref={passwordasRef}
          />
          <button
            onClick={copyFunction}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numbInput"
              onChange={(e) => setNumAllow(e.target.checked)}
              //onChange={()=>{setNumAllow((previous) => !previous);}}
            />
              Include Numbers
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={(e) => setCharAllow(e.target.checked)}
              //onChange={()=>{setCharAllow((previous) => !previous);}}
            />
            Include Special Characters
          </label>
        </div>
        <button
          onClick={passwordGenerator}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
