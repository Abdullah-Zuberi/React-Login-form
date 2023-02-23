import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: " ",
    lname: " ",
    email: " ",
    phone: " ",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    
    // const value= event.target.value;
    // const name= event.target.name;

    const{value,name}= event.target;  

   setFullName((preValue) => {
        // console.log(preValue);
        if(name === 'fName'){
        return{
        fname: value,
        lname: preValue.lname,
        email: preValue.email,
        phone: preValue.phone,
        };
       }else if(name === 'lName'){
        return{
        fname: preValue.fname,
        lname: value,
        email: preValue.email,
        phone: preValue.phone,
        };
      }
      else if(name === 'email'){
        return{
        fname: preValue.fname,
        lname: preValue.lname,
        email: value,
        phone: preValue.phone,
        };
      }
      else if(name === 'phone'){
        return{
        fname: preValue.fname,
        lname: preValue.lname,
        email: preValue.email,
        phone: value,
        };
      }
   });
  }; 

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
             Hello {fullName.fname} {fullName.lname} 
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              name="fName"
              onChange={inputEvent}
              value={fullName.fname.placeholder}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lName"
              onChange={inputEvent}
              value={fullName.lname.placeholder}
            />
             <input
              type="email"
              placeholder="Enter Your E-mail Address"
              name="email"
              onChange={inputEvent}
              value={fullName.email.placeholder}
            />

             <input
              type="number"
              placeholder="Enter Your Mobile Number"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone.placeholder}
            />
            <button type="submit">Submit Me👍</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
