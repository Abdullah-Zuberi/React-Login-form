import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState(" ");
  const [lastname, setLastName]= useState("");
  const [fullName, setFullName] = useState();
  const [LastNamenew, setLastNameNew] = useState("");

  const onSubmits=(event) =>{
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastname);
  }

  const inputEvent=(event) => {
    console.log( event.target.value );   
    setName(event.target.value)
  };

  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  }

  return (
    <>
    <div className="main_div">
    <form onSubmits={onSubmits}>
      <div>
        <h1>Hello{fullName} {LastNamenew}</h1>
        <input type="text" placeholder="Enter Your Name"  
        onChange={inputEvent}
        // value={name}
        />
        <br/>
        <input type="text" placeholder="Enter Your Last Name"  
        onChange={inputEventTwo}
        value={lastname}
        />
        <button type='submit' onClick={onSubmits}> Submit Me👍 </button>
      </div>
      </form>
      </div>
    </>
  );
};

export default App;
