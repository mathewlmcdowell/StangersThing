import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className='navbarcontainer'>
            <h1>Stranger's Things</h1>
            
                <div>
                    <Link style={{display: "inline-block", paddingRight: "5px"}} to='/'>Home</Link>
                    <Link style={{display: "inline-block", paddingRight: "5px"}} to="/register">Register</Link>
                    <Link style={{display: "inline-block", paddingRight: "5px"}} to='/login'>Login</Link>
                    <Link style={{display: "inline-block", paddingRight: "5px"}} to="/posts/new">Add A Post</Link>
                    <Link style={{display: "inline-block", paddingRight: "5px"}} to="/posts">See All Post</Link>
                    <Link style={{display: "inline-block", paddingRight: "5px"}} to='/logout'>Logout</Link>

                </div>
            
        </div>
    )
}

