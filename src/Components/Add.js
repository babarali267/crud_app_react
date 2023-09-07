import React, { useState } from "react"

import axios from 'axios'


const AddData =()=>{

 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [phone, setPhone] = useState("")
 
 const onhandleSubmit = (e)=>{
     e.preventDefault()
    console.log(name);

  axios.post('https://64ba90215e0670a501d65f8b.mockapi.io/post',{
      name:name,
      email:email,
      phone:phone


  }).then(() => {
      
    alert('Data Has Been Added')
   
          
    })
   


 }

     return(<>
     
          <div className="add_form">
               <h1>Add Data</h1>
         
             <input type="text" placeholder="Enter Name"
             onChange={(e)=>setName(e.target.value)}/>
             
             <input type="text" placeholder="Enter Email"
             onChange={(e)=>setEmail(e.target.value)}
             />
              <input type="text" placeholder="Enter Phone"
              onChange={(e)=>setPhone(e.target.value)}/>


             <button type="submit"
              onClick={onhandleSubmit}>Submit</button>
           </div>  
        
     </>)
}

export default AddData