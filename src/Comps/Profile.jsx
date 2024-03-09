import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Profile(props) {
    const {state} = useLocation();// חילוץ המידע מהעמוד הקודם
    let userObj = state;

    const navigate = useNavigate();

    const logoutUser=(e)=>{
      let del = JSON.parse(sessionStorage["users"]);
      console.log(del);
      if (userObj.Mail==del.Mail) {
        sessionStorage.clear();
        navigate('/');
      }
    }
  return (
    <div>
        user name: {userObj.UserName} <br />
        first name: {userObj.FName} <br />
        last name: {userObj.LName} <br />
        email address: {userObj.Mail} <br />
        DOB: {userObj.OldDate} <br />
        city: {userObj.City} <br />
        Street: {userObj.Street} <br />
        House number: {userObj.OldNumber} <br />
        Picture: <img src={userObj.Pic} alt="" style={{width:80,height:80}} /> <br />
        <button onClick={logoutUser}>Log Out</button>
        <button onClick={()=>navigate('/editdetails', {state : userObj})}>Edit Details</button>
        <button onClick={() => window.location.replace("https://snake.io")}>To the game</button>
    </div>
  )
}
