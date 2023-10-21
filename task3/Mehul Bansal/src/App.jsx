import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [characterallowed, setcharacterallowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordcopy = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz";

    if (numberallowed) {
      str = str + "0123456789";
    };

    if (characterallowed) {
      str = str + "!@#$%^&*()+-_{}][\|~`";
    }

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setpassword(pass);

  }, [length, numberallowed, characterallowed, setpassword])

  const copypasswordtoclipboard = useCallback(()=>{
    passwordcopy.current.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },
  [length,numberallowed,characterallowed,passwordGenerator])

  return (
    <>
      <div className='font-medium text-4xl text-center py-12 text-white'>Password Generator</div>

      <div className='h-32 w-96 bg-blue-200 rounded-3xl mx-auto'>

        <div className='mx-1 w-96'>

          <input
            type="text"
            value={password}
            placeholder='password'
            readOnly
            ref={passwordcopy}
            className='w-80 outline-none px-2 py-1 font-medium text-lg rounded-s-xl my-4'
          />

          <button className='bg-blue-400 px-2 p-1 rounded-e-xl text-lg font-semibold' onClick={copypasswordtoclipboard}>Copy</button>

        </div>

        <div className='flex align-middle justify-evenly my-2'>

          <div className='flex flex-col'>

            <input
              type="range"
              value={length}
              min={0}
              max={30}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />

            <label className='font-medium'> Length :   {length}</label>

          </div>

          <div className='font-medium'>

            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberallowed}
              onChange={()=>{
                setnumberallowed((prev)=>!prev);
              }} 
              />

            <label htmlFor='numberInput' className='mx-1'>Numbers</label>

          </div>

          <div className='font-medium'>

            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={characterallowed}
              onChange={()=>{
                setcharacterallowed((prev)=>!prev);
              }} 
              />

            <label htmlFor='characterInput' className='mx-1'>Characters</label>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
