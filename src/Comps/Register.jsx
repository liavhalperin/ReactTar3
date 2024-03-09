import { useState } from "react";

export default function Register() {
    const [City, setCity] = useState("");
    const allCities = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Philadelphia",
        "Phoenix",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
        "Austin",
        "Jacksonville",
    ];
    const [UserName, setUserName] = useState("");
    const [Pass, setPass] = useState("");
    const [VeriPass, setVeriPass] = useState("");
    const [Mail, setMail] = useState("");
    const [Pic, setPic] = useState("");
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [OldDate, setDate] = useState("");
    const [Street, setStreet] = useState("");
    const [OldNumber, setNumber] = useState("");
    const [PlaceHolderCity, setPlaceHolderCity] = useState(allCities);
    const [error_helper, setError] = useState("");
   //showing the error message
   const [errorUS, setErrorUS] = useState("");


    const handleChange_users = (e) => {
        const { name, value } = e.target;
        if (name === "username") {
            if (!/^[a-zA-Z._+%-]+$/.test(value) || value.length > 60) {
                setUserName("Username is not valid");
            } else {
                setUserName(value);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "password") {
            if (value.length < 7) {
                setPass(
                    "Password is too short, it must be at least 7 characters long."
                );
            } else if (value.length > 12) {
                setPass("Password is too long, it must be at most 12 characters long.");
            } else if (!/[A-Z]/.test(value)) {
                setPass("Password must contain at least one uppercase letter.");
            } else if (!/\d/.test(value)) {
                setPass("Password must contain at least one digit.");
            } else if (!/[^a-zA-Z0-9]/.test(value)) {
                setPass("Password must contain at least one special character.");
            } else {
                setPass(value);
            }
        }
    };

    const handleChange_v_pass = (e) => {
        const { name, value } = e.target;
        if (name === "VerifyPassword") {
            if (value !== Pass) {
                setVeriPass("Passwords do not match");
            } else {
                setVeriPass("");
            }
        }
    };

    const handleChange_name = (e) => {
        const { name, value } = e.target;
        if (name === "FirstName") {
            if (!/^[a-zA-Z]*$/u.test(value)) {
                setFName("Please enter only text.");
            } else {
                setFName(value);
            }
        }
    };

    const handleChange_LastName = (e) => {
        const { name, value } = e.target;
        if (name === "LastName") {
            if (!/^[a-zA-Z]*$/u.test(value)) {
                setLName("Please enter a valid string.");
            } else {
                setLName(value);
            }
        }
    };

    const handleChange_email = (e) => {
        const { name, value } = e.target;
        if (name === "Email") {
            const validEmailPattern = /^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\.(com)$/;
            if (!validEmailPattern.test(value)) {
                setMail(
                    "Please enter a valid email address in the format user@Gmail.com"
                );
            } 
            else {
                setMail(value);
            }
        }
    };

    const handleChange_date = (e) => {
        const { name, value } = e.target;
        if (name === "Date") {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                setDate("Please enter a valid date in the format YYYY-MM-DD");
            } else {
                setDate(value);
            }
        }
    };

    const handleChange_streetName = (e) => {
        const { name, value } = e.target;
        if (name === "Street") {
            if (!/^[א-ת\s]*$/.test(value)) {
                setStreet("Please enter a valid street name using Hebrew letters.");
            } else {
                setStreet(value);
            }
        }
    };

    const handleChange_streetnumber = (e) => {
        const { name, value } = e.target;
        if (name === "number") {
            const OldNumber = parseInt(value);
            if (Number.isInteger(OldNumber) && OldNumber >= 1) {
                setNumber(value);
            } else {
                setNumber("Please enter a valid street number.");
            }
        }
    };

    const handleChange_City = (e) => {
        const { value } = e.target;
        setCity(value);

        if (value) {
            const filteredCities = allCities.filter((city) =>
                city.toLowerCase().startsWith(value.toLowerCase())
            );
            setPlaceHolderCity(filteredCities);
        } else {
            setPlaceHolderCity(allCities);
        }
    };

    const RegisterUser=()=>{
        if (localStorage["users"]==undefined) {
            console.log('hi');
            var users=[];
        }
        else{
            console.log('hi2');
            var users=JSON.parse(localStorage["users"]);
        }
        let user={
            UserName,
            Pass,
            Mail,
            Pic,
            FName,
            LName,
            OldDate,
            City,
            Street,
            OldNumber
        }
        users.push(user);
        localStorage["users"]=JSON.stringify(users);
        console.log(localStorage["users"]);

    }

    return (
        <div>
            User Name: <input type="text" name="username" onChange={handleChange_users} /> <br />
            <h6 >{UserName}</h6>
            <h6>{errorUS}</h6>
            Password: <input type="password" name="password" onChange={handleChange} /> <br />
            <h6>{Pass}</h6>
            Verify Password: <input type="password" name="VerifyPassword" onChange={handleChange_v_pass} /> <br />
            <h6>{VeriPass}</h6>
            Upload picture: <input type="file" name="img" onChange={(e) => {
                let file = e.target.files[0];
                const fileName = file.name;
                const extension = fileName.split(".").pop();
                let reader = new FileReader();
                reader.addEventListener("load", () => {
                    // convert image file to base64 string and save to localStorage
                    setPic(reader.result);
                });
                if (file) {
                    reader.readAsDataURL(file);
                } else {
                    setPic("No file selected");
                    return;
                }
                if (extension !== "jpg" && extension !== "jpeg") {
                    setPic("Only JPG or JPEG files are allowed");
                } else {
                    setPic(reader.result);
                }
            }} /> <br />
            <h6>{Pic}</h6>
            First Name: <input type="text" name="FirstName" onChange={handleChange_name} /> <br />
            <h6>{FName}</h6>
            Last Name: <input type="text" name="LastName" onChange={handleChange_LastName} /> <br />
            <h6>{LName}</h6>
            Email: <input type="email" name="Email" onChange={handleChange_email} /> <br />
            <h6>{Mail}</h6>
            Date: <input type="date" name="Date" onChange={handleChange_date} /> <br />
            <h6>{OldDate}</h6>
            City: <input type="text" name="City" value={City} onChange={handleChange_City} list="cities" />
            <datalist id="cities">
                {PlaceHolderCity.map((city, index) => (
                    <option key={index} value={city} />
                ))}
            </datalist> 
            <br /> <br />
            Street: <input type="text" name="Street" onChange={handleChange_streetName} /> <br />
            <h6>{Street}</h6>
            House Number: <input type="number" placeholder="Enter house number" name="number" onChange={handleChange_streetnumber} /> <br />
            <h6>{OldNumber}</h6>
            <button onClick={RegisterUser}>Register</button>
        </div>
    );
}
