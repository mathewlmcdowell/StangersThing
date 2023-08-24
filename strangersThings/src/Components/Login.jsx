import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BASE_URL = "https://strangers-things.herokuapp.com/api/2305-FTB-ET-WEB-PT"
export default function Login() {
    const [user, setUser] = useState({
        username: "",
        password: "",
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

            case "Password":
                setUser((prev) => {
                    return { ...prev, password: e.target.value }
                })
                break;

            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const login = async () => {

            try {
              const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: user.username,
                    password: user.password,
                  }
                })
              });
              const result = await response.json();
              console.log(result);
              if (result.success) {
                sessionStorage.setItem("token", result.data.token);
                navigate("/posts/new");
              } else {
                alert ("Login information not correct")
              }

    
            
              return result
            } catch (err) {
              console.error(err);
            }
          }
          login() ;
    }

  return (
    <div>Login
        <form onSubmit={handleSubmit}>
                <input type="text" name="Username" id="Username" placeholder='username' min="6" value={user.username} onChange={handleChange} /> <br />
                <input type="password" name="Password" id="Password" placeholder='password' min="8" required value={user.password} onChange={handleChange} /> <br />
                <button type="submit">Submit</button>
            </form>
    </div>
  )
}
