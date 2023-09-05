import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Login from './Login.jsx'
import TextField from "@mui/material/TextField";
import List from "./List"; 


export default function NavBar() {

    
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };


    return (
        
        <div className='contain outline'>

            <div>
                <Link to="/register" className='link-styles2'>Register</Link>
                <Link to='/login' className='link-styles2'>Login</Link>
            </div>
            <div>
                <Link to='/Profile' className='link-styles2'>Profile</Link>
                <Link to='/logout' className='link-styles2'>Logout</Link>
            </div>
                <div className="search center title">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
                </div>

                <h1 className='title'>Stranger's Things</h1>
                    <div className='links'>
                        
                        <Link to='/' className='link-styles'>Home</Link>
                        <Link to="/posts/new" className='link-styles'>Add A Post</Link>
                        <Link to="/posts" className='link-styles'>See All Post</Link>
                        
                    </div>
                <div className='results'>
                    <List input={inputText} />
                </div>
        </div>
    )
}

