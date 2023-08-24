import React from 'react'

export default function PostCard({ post }) {
    return (
        <div className="post-card outline" >
            <h3>{post.author.username}</h3>
            <h3>{post.location}</h3>
            <h3>{post.title}</h3>
            <h3>{post.price}</h3>
            <h3>{post.description}</h3>
            <h3>{post.willDeliver}</h3>
        </div>
    )
}
