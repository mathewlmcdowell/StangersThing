import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className='contain outline'>

            <Link to="/register" className='link-styles2'>Register</Link>
            <Link to='/login' className='link-styles2'>Login</Link>
                
                <h1 className='title'>Stranger's Things</h1>
                    
                    <div className='links'>
                        
                        <Link to='/' className='link-styles'>Home</Link>
                        <Link to="/posts/new" className='link-styles'>Add A Post</Link>
                        <Link to="/posts" className='link-styles'>See All Post</Link>
                        
                    </div>
        </div>
    )
}

