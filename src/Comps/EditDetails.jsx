import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function () {
    const {state} = useLocation();// חילוץ המידע מהעמוד הקודם
    let userObj = state;
    console.log(userObj);
    const [UserName,setName]=useState(userObj.UserName);
    const [Pass,setPass]=useState(userObj.Pass);
    const [Pic,setPic]=useState(userObj.Pic);
    const [FName,setFName]=useState(userObj.FName);
    const [LName,setLName]=useState(userObj.LName);
    const [OldDate,setDate]=useState(userObj.OldDate);
    const [City,setCity]=useState(userObj.City);
    const [Street,setStreet]=useState(userObj.Street);
    const [OldNumber,setNumber]=useState(userObj.OldNumber);

    console.log(userObj.Mail);
    let Mail = userObj.Mail;
    const editUser=()=>{
        let users = JSON.parse(localStorage["users"]);
        console.log(users);
        let k;
        for (k in users) {
            if (users[k].Mail==userObj.Mail) {
                users[k]={UserName,Pass,Pic,FName,LName,OldDate,City,Street,OldNumber,Mail};
                localStorage["users"]=JSON.stringify(users);
            }
        
        }
    }

  return (
    <div>
         User Name: <input type="text" onChange={(e)=>setName(e.target.value)}/> <br />
        Password: <input type="text" onChange={(e)=>setPass(e.target.value)}/> <br />
        Upload picture: <input type="file" onChange={(e)=>setPic(e.target.value)}/> <br />
        First Name: <input type="text" onChange={(e)=>setFName(e.target.value)}/> <br />
        Last Name: <input type="text" onChange={(e)=>setLName(e.target.value)}/> <br />
        Date <input type="date" onChange={(e)=>setDate(e.target.value)}/> <br />
        City <input type="text" onChange={(e)=>setCity(e.target.value)}/> <br />
        Street <input type="text" onChange={(e)=>setStreet(e.target.value)}/> <br />
        House Number <input type="number" onChange={(e)=>setNumber(e.target.value)}/> <br />
        <button onClick={editUser}>update</button>
    </div>
  )
}
