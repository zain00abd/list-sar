"use client"



import { useEffect, useState } from "react";
import "./style.css"
import Header from "app/components/header";

const Page = () => {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [name, setname] = useState(null);
  const [addres, setaddres] = useState(null);
  const [select, setselect] = useState(null);
  

  const setuser = async (e) =>{
    e.preventDefault()
    console.log(select)

    // console.log(name + ' / ' + addres + ' / ')

    const response = await fetch("api/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        addres,
        select,
      }),
    });
 
    const dataFromBackend = await response.json();
    console.log(dataFromBackend);

    if(response.ok){
      alert(" تم اضافة عامل بنجاح ")
    }

  }





  return (
<>
  <h4> اضافة العامل جديد </h4>
  <div className="container mt-3">
    <form onSubmit={setuser} style={{ direction: "rtl" }} >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          
          أسم العامل
        </label>
        <input
          onChange={(e)=>{
            setname(e.target.value)
          }}
          type="text"
          name="name"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          عدد الساعات 
        </label>
        <input
          onChange={(e)=>{
            setaddres(e.target.value)
          }}
          type="text"
          name="addres"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <select           onChange={(e)=>{
            setselect(e.target.value)
          }} className="form-select mb-3" aria-label="Default select example" style={{textAlign:"center"}}>
  <option defaultValue={"selected"} > المهنة </option>
  <option defaultValue={1}>تنجيد</option>
  <option defaultValue={2}>خياطة</option>
  <option defaultValue={3}>تفصيل</option>
</select>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>

  <Header active="adduser" />
</>

  );
}

export default Page;
