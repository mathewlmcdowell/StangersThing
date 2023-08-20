import { useState } from "react";
import { useEffect } from "react";

const dummyPosts = [{author: "John Doe", id: 1, location: "Austin, Tx", title: "PC", price: 1, description: "Like New", willDeliver: "yes"},];

export default function Posts() { 

    const [posts, setPosts] = useState(dummyPosts);
    useEffect(()=>{},[])

// api fetch posts
    useEffect(() => {
        async function fetchPosts() {
          try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2305-FTB-ET-WEB-PT/posts/');
            const result = await response.json();
            setPosts(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchPosts()
      }, []);


    console.log("Posts: ", posts)

  return; 
}