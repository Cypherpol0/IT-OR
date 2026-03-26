import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPassword] = useState("");

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

  return (
    <>
      <div className="w-full max-w-3xl mx-auto p-4 m-4 shadow-lg rounded-lg bg-gray-600">
        <h1>Password Generator</h1>
        <div className="flex shadow rounded-lg flex-col gap-4 overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            readOnly
            className="w-full p-2 text-center text-lg font-bold bg-gray-700 text-white"
            placeholder='Password'
          />
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={numAllow}
                onChange={(e) => setNumAllow(e.target.checked)}
              />
              Include Numbers
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={charAllow}
                onChange={(e) => setCharAllow(e.target.checked)}
              />
              Include Special Characters
            </label>
          </div>
          <div className="flex items-center gap-4">
            <label>
              Length:
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-16 ml-2 p-1 text-center"
                min="1"
              />
            </label>
            <button
              onClick={passwordGenerator}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
