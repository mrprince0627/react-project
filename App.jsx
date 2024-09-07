import React, { useState, useCallback, useEffect,useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberallow, setNumberallow] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [password, setpassword] = useState('');

  const passwordRef = useRef(null)   //

 const copyPassword = useCallback( () => {
  passwordRef.current?.select();  //  select text in input field
  window.navigator.clipboard.writeText(password)
 },[password] )


  const psswordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyz';

    if (numberallow) {
      str += '0123456789';
    }
  
    if (symbol) {
      str += '!@#$%&*';
    }
    if(uppercase){
      str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberallow,uppercase ,symbol ]); 

  useEffect(() => {
    psswordGenerator();
    console.log("Password");
    
  }, [psswordGenerator]); 

  return (
    <>
      <div className="w-full max-w-lg mx-auto px-3 my-9 py-4 text-center mb-4 rounded-lg text-black bg-gray-300 shadow-lg
      align-center content-center h-56
      "
      
      >
        <h1 className="mb-4 text-lg font-serif ">Customize your Password</h1>

        <div className="flex shadow-emerald-200 rounded-lg overflow-hidden mb-4">
          <input
            value={password}
            className="outline-none w-full py-1 px-3"
            type="text"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
      
      <button 
          onClick={psswordGenerator}
          
          className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0  bg-sky-500 hover:bg-sky-700 ... ">
            Generate
          </button>



        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              onChange={() => {
                setNumberallow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              onChange={() => {
                setSymbol((prev) => !prev);
              }}
            />
            <label htmlFor="symbolinput ">Symbols</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              onChange={() => {
                setUppercase((prev) => !prev);
              }}
            />
            <label htmlFor="symbolinput ">Upercase </label>
          </div>   
          </div>

          <button 
          onClick={copyPassword}
          
          className="outline-none bg-blue-400 text-white px-3 py-0.5  bg-sky-500 hover:bg-sky-700 ... rounded-lg mt-6 ">
            Copy password
          </button>


        </div>
        
    </>
  );
}

export default App;
