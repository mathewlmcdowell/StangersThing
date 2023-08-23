
import React, { useEffect, useState} from "react"

const dummyPosts = [{author: "John Doe", id: 1, location: "Austin, Tx", title: "PC", price: 1, description: "Like New", willDeliver: "yes"},];

export default function Posts() { 

    const [posts, setPosts] = useState([]);
    useEffect(()=>{},[])

// api fetch posts
    useEffect(() => {
        async function fetchPosts() {
          try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2305-FTB-ET-WEB-PT/posts/');
            const result = await response.json();
            // console.log("result", result) ;
            setPosts(result.data.posts);
          } catch (error) {
            console.error(error);
          }
        }
        fetchPosts()
      }, []);


    console.log("Posts: ", posts)

  return (
    <div className="outline">
      <h1>Post Component</h1>
      <div className="post-container">
        {posts.length > 0 && 
          posts.map((post) => {
            return (
              <div className="post-card" key={post.id}>
                <h3>{post.author.username}</h3>
                <h3>{post.location}</h3>
                <h3>{post.title}</h3>
                <h3>{post.price}</h3>
                <h3>{post.description}</h3>
                <h3>{post.willDeliver}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
