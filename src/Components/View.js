import React, { useState, useEffect } from "react";
import axios from 'axios';
import UpdateForm from "./Update";

const ViewData = () => {
  const [data, setData] = useState([]);
 
  function getData() {
    axios
      .get("https://64ba90215e0670a501d65f8b.mockapi.io/post")
      .then((res) => {
        setData(res.data);
       
         
      });
  }

  function delhandler(id) {
    axios.delete(`https://64ba90215e0670a501d65f8b.mockapi.io/post/${id}`).then((res) => {
      console.log(res);
      getData();
    }).then(() => {
       alert("data Has been deleted !")
    });
  }

  useEffect(() => {
    getData();
  }, []);

  // const myid = '';

    const [myid, setmyid] = useState();
    const [uname, setname] = useState("");
    const [uemail, setemail] = useState("");
    const [uphone, setphone] = useState("");
    
  

  function update(id) {
    axios.get(`https://64ba90215e0670a501d65f8b.mockapi.io/post/${id}`).then((res) => {
      console.log(res.data);
        setmyid(id);
      setname(res.data.name);
      setemail(res.data.email);
      setphone(res.data.phone);
    });

    const div = document.querySelector('#update_form')
    div.style.display = "block";
    const closebtn= document.querySelector('#close_btn')
  

  }

  
// updateHandle

function updateHandle (id){
   console.log(id);
   
   axios.put(`https://64ba90215e0670a501d65f8b.mockapi.io/post/${id}`, {

          name: uname,
          email: uemail,
          phone: uphone,
        }).then((res) => {
              console.log(res);
                getData();  
        })
 
    const div = document.querySelector('#update_form')
    div.style.display = "none";
}


  return (
    <>
     <div className="view_data">

      <h1>View Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <button onClick={() => delhandler(item.id)}>Delete</button>

            <button onClick={() => update(item.id)}>Update</button>
           
          </li>
        ))}
        
      </ul>
      </div> 
      <UpdateForm
       uname={uname} uemail={uemail} uphone={uphone}
       setname={setname}  setemail={setemail}  setphone={setphone}
        getData={getData}
         myid={myid}
        setmyid = {setmyid}
        // setid={setid}

        updateHandle={updateHandle}
      

       
       />
    </>
  );
};



export default ViewData;
