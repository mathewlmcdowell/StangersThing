import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className='contain outline'>
            <h1 className='title'>Stranger's Things</h1>
                <div>
                    
                    <Link to='/' className='links'>Home</Link>
                    <Link to="/register" className='links'>Register</Link>
                    <Link to='/login' className='links'>Login</Link>
                    <Link to="/posts/new" className='links'>Add A Post</Link>
                    <Link to="/posts" className='links'>See All Post</Link>
                    
                </div>

            
        </div>
    )
}
 