import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../inance-html/css/bootstrap.css";
//import "../inance-html/css/font-awesome.min.css";
// import "../inance-html/css/responsive.css";
// import "../inance-html/css/style.css";
// import "../inance-html/css/style.css.map";
//import "../inance-html/css/style.scss";


export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateUsername = (username) => {
        if (!/^[a-zA-Z0-9._+%-]{1,60}$/.test(username)) {
            setNameError("Username is not valid. Please use only alphanumeric characters and special characters.");
            return false;
        }
        setNameError("");
        return true;
    };

    const validatePassword = (password) => {
        if (password.length < 7 || password.length > 12) {
            setPasswordError("Password must be between 7 and 12 characters long.");
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter.");
            return false;
        }
        if (!/\d/.test(password)) {
            setPasswordError("Password must contain at least one digit.");
            return false;
        }
        if (!/[^a-zA-Z0-9]/.test(password)) {
            setPasswordError("Password must contain at least one special character.");
            return false;
        }
        setPasswordError("");
        return true;
    };

    const loginUser2 = () => {
        if (!validateUsername(name)) return;
        if (!validatePassword(password)) return;

        let users = JSON.parse(localStorage.getItem("users"));
        let k;
        for (k in users) {
            if (users[k].UserName === name && users[k].Pass === password) {
                sessionStorage.setItem("users", JSON.stringify(users[k]));
                let us = users[k];
                navigate('/profile', { state: us }); // Pass user object using state
                return true;
            }
        }
        setError("יש להתחבר למערכת");
        return false;
    };

    const loginUser = () => {
        if (name === "admin" && password === "ad12343211ad") {
            navigate('/systemadmin');
        } else {
            loginUser2();
        }
    };

    return (
        <div>
            <br />
            <br />
            User Name: <input type="text" onChange={(e) => setName(e.target.value)} /> 
            {nameError && <p>{nameError}</p>} <br />
            Password: <input type="password" onChange={(e) => setPassword(e.target.value)} />
            {passwordError && <p>{passwordError}</p>}
            <br />
            <button onClick={loginUser}>Log In</button> <br />
            {error && <p>{error}</p>}
        </div>
    );
}
