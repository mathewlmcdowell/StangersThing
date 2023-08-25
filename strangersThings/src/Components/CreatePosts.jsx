import React, { useState } from 'react'

const BASE_URL = "https://strangers-things.herokuapp.com/api/2305-FTB-ET-WEB-PT"

export default function CreatePosts() {
    const [post, setPost] = useState({
        title: "",
        description: "",
        price: "",
    })

    const [token, setToken] = useState(sessionStorage.getItem("token"))

    const handleChange = (e) => {
        let name = e.target.name;

        switch (name) {
            case "title":
                setPost((prev) => {
                    return { ...prev, title: e.target.value }
                })
                break;

            case "description":
                setPost((prev) => {
                    return { ...prev, description: e.target.value }
                })
                break;

            case "price":
                let price = `$${Number.parseFloat(e.target.value).toFixed(2)}`
                setPost((prev) => {
                    return { ...prev, price: e.target.value }
                })
                break;

            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("post: ", post)

        const makePost = async () => {

            try {
                const response = await fetch(`${BASE_URL}/posts`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        post: {
                            title: post.title,
                            description: post.description,
                            price: post.price,
                            willDeliver: true
                        }
                    })
                });
                const result = await response.json();
                console.log(result);
                setPost({
                    title: "",
                    description: "",
                    price: "",
                })
                return result
            } catch (err) {
                console.error(err);
            }
        }
        makePost();

    }

    if (token) {
        return (
            <div className='outline center'>
                <h2>CreatePosts</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" name="title" id="title" value={post.title} placeholder="Title" />
                    <textarea onChange={handleChange} name="description" id="description" value={post.description} placeholder="Description" rows={4} cols={50}></textarea>
                    <input onChange={handleChange} type="number" name="price" id="price" value={post.price} placeholder="Price" /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    } else
        return (
            <div>
                <h3>Please Login</h3>
            </div>
        )


}

