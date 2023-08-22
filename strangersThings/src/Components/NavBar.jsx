import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className='navbarcontainer'>
            <h1>Stranger's Things</h1>
            
                <div>
                    <Link to='/'>Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to='/login'>Login</Link>
                    <Link to="/posts/new">Add A Post</Link>
                    <Link to="/posts">See All Post</Link>

                </div>
            
        </div>
    )
}
