import React, { useEffect, useState } from 'react'
const  FormValidation = ()=>{

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setConfirmPassword] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [secodNameErr, setSeconNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [comfirmpasswordErr, setComfirmPasswordErr] = useState(false);


  const registerForm = (e) => {
    e.preventDefault();
    if(firstName=== ""){
      setFirstNameErr(true)
    }
    if(secondName===""){
      setSeconNameErr(true)
    }
    if(email===""){
      setEmailErr(true)
    }
    if(password===""){
      setPasswordErr(true)
    }
     if(comfirmPassword===""){
      setComfirmPasswordErr(true)
    }
  };

  useEffect(() => {
    if (firstName !== "") {
      setFirstNameErr(false);
    }
    if (secondName !== "") {
      setSeconNameErr(false);
    }
    if (email !== "") {
      setEmailErr(false);
    }
    if (password !== "") {
      setPasswordErr(false);
    }
    if (comfirmPassword !== "") {
      setComfirmPasswordErr(false);
    }
  }, [firstName, secondName, email, password, comfirmPassword]);
 
  return(
    <>
    <div className="d-flex justify-content-center mt-5">
    <div className="shadow p-5">
      <h1 className="">Register</h1>

   <form onSubmit={registerForm}>
   <div className="">
        <label>First name</label> <br />
        <input value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)}  placeholder="first name" />
        {firstNameErr && <p className='text-danger'>First Name Is Required</p>} 
      </div>

      <div className="">
        <label>Second name</label> <br />
        <input value={secondName} type="text" onChange={(e)=> setSecondName(e.target.value)} placeholder="second name" /> 
        {secodNameErr && <p className='text-danger'>Second Name Is Required</p>}
      </div>

      <div className="">
        <label>Email</label><br />
        <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="enter email" />
        {emailErr && <p className='text-danger'>Email Is Required</p>} 
      </div>

      <div className="">
        <label>Password</label><br />
        <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" />
        {passwordErr && <p className='text-danger'>Password Is Required</p>} 
      </div>

      <div className="">
        <label>Comfirm password</label><br />
        <input value={comfirmPassword} type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="comfirm password" /> 
        {comfirmpasswordErr && <p className='text-danger'>Comfirm Password Is Required</p>} 
      </div>

<div className="mt-2">
  <button type="submit" className="btn btn-success">Register</button>
</div>
   </form>

    </div>
    </div>
    </>
  )
}

export default FormValidation;
