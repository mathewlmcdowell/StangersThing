
import React, { useEffect, useState } from "react"
import PostCard from "./PostCard";

const dummyPosts = [{ author: "John Doe", id: 1, location: "Austin, Tx", title: "PC", price: 1, description: "Like New", willDeliver: "yes" },];

export default function Posts() {

  const [posts, setPosts] = useState([]);
  useEffect(() => { }, [])

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
      <h1>Posts</h1>

    <div className="outline">
      <div className="post-container">
        {posts.length > 0 &&
          posts.map((post) => {
            return (
              <React.Fragment key={post._id}>
                <PostCard
                  post={post}
                />
              </React.Fragment>

            )
          })
        }
      </div>
    </div>
  )
}
