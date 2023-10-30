"use client"
//1. Import area

import { useState } from "react";
import Swal from "sweetalert2";


//2. Defination Area
function Home() {
  //2.1
  const [info,setInfo] = useState('Registration Page');
  const [un,setUn] = useState('');
  const [eml,setEml] = useState('');
  const [pwd,setPwd] = useState('');


  //2.2 Function defination area
  let handleChange1 = (e)=>{// username`
    console.log('username=',e.target.value);
    setUn(e.target.value);
  }
  let handleChange2 = (e)=>{// email
    console.log('email=',e.target.value);
    setEml(e.target.value);
  }
  let handleChange3 = (e)=>{//password
    console.log('password=',e.target.value);
    setPwd(e.target.value);
  }
  let submitData = async ()=>{
    console.log('Helelo');
    let payload = {
      "username": un,
      "email": eml,
      "password": pwd
    };
  
    try {
      const res2 = await fetch('/api/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specify that you're sending JSON data
        },
        body: JSON.stringify(payload)
      });
      const data = await res2.json();

     /*   */
      if(data.data2.data === null){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.data2.error.message,
          footer: ''
        })
      }else{
        Swal.fire(
          'Good job!',
          'User Regsitered successfull!',
          'success'
        )
      }
    } catch (error) {
      
    }
    
  } //This is a FAT ARROW DEFINATION


  //2.3 Return statement
  return (
    <>
      <div className="container">
        <div className="card">
            <div className="card-header text-center">
              <h1>{info}</h1>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">UserName</label>
                  <input name="username" type="email" className="form-control" id="username" aria-describedby="emailHelp" onChange={handleChange1} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange2} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input name="password" type="password" className="form-control" id="password" onChange={handleChange3} />
                </div>
             </form>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary" onClick={submitData}>Register Now </button>
            </div>
        </div>
      </div>
     
    </>
  )
}

//3. Export area

//3.1 Default Export
export default Home; 

//3.2
