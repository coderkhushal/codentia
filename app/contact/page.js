"use client"
import style from "../../styles/contact.module.css"
import { useState } from "react"

const page = () => {
  const [formdata,setformdata]=useState({"name":"", "phoneno":"","email":""})
  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.id]:e.target.value})
  }
  const submitdata=async(e)=>{

    let res= await fetch("http://localhost:3000/api/contact",{
      method:"POST",
      body:JSON.stringify(formdata),
      headers:{
        "Content-Type":"application/json"
      }
    })
    let data= await res.json()
    if(data.success){
      console.log("submitted successfully")
    }
    else{
      console.log("error submitting form")
    }
    
    e.target.parentElement.reset();
  }
  return (
    <div className={style.main}>
      <h1 className={style.primaryh}>Contact Us</h1>
      <form id={style.contactform}>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={handlechange} id="name" />
        <label htmlFor="phoneno">Contact No.</label>

        <input type="number" onChange={handlechange} id="phoneno"/>

        <label htmlFor="email">Email</label>
        <input type="email" onChange={handlechange} id="email"/>
      <button type="submit" onClick={(e)=>{e.preventDefault();submitdata(e)}} >Submit</button>
      </form>
    </div>
  )
}

export default page
