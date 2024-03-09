import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../mystyle/sty.css";


export default function SystemAdmin() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        if (storedUsers) {
            setUsers(storedUsers);
        }
    }, []);

    const navigate = useNavigate();

    const deleteUser = (email) => {
        const updatedUsers = users.filter(user => user.Mail !== email);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    const showTable = users.map((user, index) =>
        <tr key={index} style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
            <td style={{ borderCollapse: 'collapse', border: '1px solid black' }}>{user.UserName}</td>
            <td style={{ borderCollapse: 'collapse', border: '1px solid black' }}>{user.FName} {user.LName}</td>
            <td style={{ borderCollapse: 'collapse', border: '1px solid black' }}>{user.OldDate}</td>
            <td style={{ borderCollapse: 'collapse', border: '1px solid black' }}>{user.Street} {user.Number}, {user.City}</td>
            <td style={{ borderCollapse: 'collapse', border: '1px solid black' }}>{user.Mail}</td>
            <td style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                <img src={user.Pic} alt="" style={{ width: 80, height: 80 }} />
            </td>
            <td>
                <button onClick={() => deleteUser(user.Mail)}>delete</button>
                <button onClick={() => navigate('/editdetails', { state: user })}>update</button>
            </td>
        </tr>
    );

    return (
        <div className='admin-container'> 
            <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                <tbody>
                    {showTable}
                </tbody>
            </table>
        </div>
    );
}
