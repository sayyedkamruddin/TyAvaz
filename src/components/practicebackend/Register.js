import React, { useState } from 'react'

export default function 

() {


const [data,setdata]=useState({
    username:"",
    password:"",
    rollno:""
})
    const Rdata=(e)=>{
        e.preventDefault()
        console.log(data);
    }
    const handle=(e)=>{
        const name=e.target.name
        const value=e.target.value

        setdata((pre)=>{
            return {...pre,[name]:value}
        })
        // console.log(data);
    }
  return (
    <div>
<form onSubmit={Rdata} action='/Form'>

    <input type='text' placeholder='username' minLength={5} onChange={handle} name="username"/>   <br/>
    <input type='password' placeholder='password' minLength={8} onChange={handle} name='password' />   <br/>
    <input type='roll no' placeholder='roll no' maxLength={5} onChange={handle} name='rollno' /> <br/>
    <input type='submit' value="submit"/>

</form>


        
    </div>
  )
}
