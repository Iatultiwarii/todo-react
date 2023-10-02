  "use client"
  import React, { useState } from "react";
const page=()=>{
     const [title,settitle]=useState("")
     const [desc,setdesc]=useState("")
     const [mainTask,setMainTask]=useState([])
     const submitHandler= (e)=>{ 
e.preventDefault()
setMainTask([...mainTask,{title,desc}]);
settitle(" ")
setdesc(" ")
     }

     let renderTask=<h2>NO TASK AVAILABLE</h2>
 renderTask = mainTask.map((t,i)=>{
      return (
      <div className="flex justify-between">
        <h5>{t.title}</h5>
        <h6>{t.desc}</h6>
      </div>
  );
 });
return( 
  <>
  <h1 className="bg-black text-center text-white py-5 ">TO DO LIST</h1>
  

  <form onSubmit={submitHandler}>
    <input  type="text"className="border-4 black m-5 font-500 px-4 py-4" placeholder="enter task here" value={title} onChange={(e)=>{
      settitle(e.target.value)
    }}/>
    <input className="border-4 black m-5 font-500 px-4 py-4 "  placeholder="enter description here" value={desc} onChange={(e)=>{
      setdesc(e.target.value)}}></input>
    <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded-3" >SUBMIT</button>
  </form>
  <hr/>
<div className="bg-slate-200 p-8">
<ul>{renderTask}</ul>
</div>
  </>
)
}
export default page


