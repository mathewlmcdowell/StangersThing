import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { preview } from 'vite'

const BASE_URL = "https://strangers-things.herokuapp.com/api/2305-FTB-ET-WEB-PT"
export default function Register() {
    const [user, setUser] = useState({
        username: "",
        password1: "",
        password2: "",
    })

const navigate = useNavigate()

    const handleChange = (e) => {
        let name = e.target.name;

        switch (name) {
            case "Username":
                setUser((prev) => {
                    return { ...prev, username: e.target.value }
                })
                break;

            case "Password1":
                setUser((prev) => {
                    return { ...prev, password1: e.target.value }
                })
                break;

            case "Password2":
                setUser((prev) => {
                    return { ...prev, password2: e.target.value }
                })
                break;

            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (user.password1 !== user.password2) {
            alert("passwords do not match")
            return;
        }

        console.log(user)

        const registerUser = async () => {
            console.log("in the register user")
            try {
                const response = await fetch(
                    `${BASE_URL}/users/register`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                            username: user.username,
                            password: user.password1,
                        }
                    })
                });
                const result = await response.json();
                // You can log ▲▲▲ the result
                // here ▼▼▼ to view the json object before returning it
                console.log("registered result: ", result)
                setUser({
                    username: "",
                    password1: "",
                    password2: "",
                })
                return result
            } catch (err) {
                console.error(err);
            }
        }

        registerUser()
        .then((result) => {
            console.log("my result", result)
            sessionStorage.setItem("token", JSON.stringify(result.data.token))
            navigate("/posts/new")
        })
    }

    return (
        <div className='outline center'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Username" id="Username" placeholder='username' min="6" value={user.username} onChange={handleChange} /> <br />
                <input type="text" name="Password1" id="Password1" placeholder='password' min="8" required value={user.password1} onChange={handleChange} /> <br />
                <input type="text" name="Password2" id="Password2" placeholder='verify password' min="8" required value={user.password2} onChange={handleChange} /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

