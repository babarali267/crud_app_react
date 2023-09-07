  import React from "react";




 const UpdateForm = ({ 

     uname, setname, uemail,myid,
     setemail, uphone, setphone,
     updateHandle, setmyid
       

    }) => {

function closeform(){
  document.getElementById("update_form").style.display = "none";
}
  return(<>
  <div className="update_container" id="update_form">

  <div className="update_form" id="update_form">

      <div className="close_btn" id="close_btn" onClick={closeform}>
         <span>X</span>
      </div>

        <h1>Update Form</h1>
        <label>Name</label>
        <input type="text"  value={uname}
         onChange={(e) => setname(e.target.value)} />

        <label>Email</label>
        <input type="text" value={uemail} 
        onChange={(e) => setemail(e.target.value)} />

        <label>Phone</label>
        <input type="text" value={uphone} 
        onChange={(e) => setphone(e.target.value)} />
        
          <p>{myid}</p>
        <button 
        onClick={() => updateHandle(myid)}>Update</button>
    </div>
   </div> 
     </>)
}

export default UpdateForm;