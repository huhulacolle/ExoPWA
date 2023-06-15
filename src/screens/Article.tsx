import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { IPost } from '../interfaces/IPost';
import CardComponent from '../components/CardComponent';

function Article() {

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
      getPosts();
    }, [])
    

    const [Posts, setPosts] = useState<IPost>({
        id: parseInt(id as string),
        body: "null",
        title: 0
    });

    async function getPosts(): Promise<void> {
        try {
            const cacheName = 'my-api-cache';
            const cache = await caches.open(cacheName);
            const cacheResponse = await cache.match(`https://jsonplaceholder.typicode.com/posts/${id}`); 
        
            if (cacheResponse) {
              const cachedData = await cacheResponse.json() as IPost;
              setPosts(cachedData)
            } else {
              const networkResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
              const data = networkResponse.data as IPost;        
              cache.put(`https://jsonplaceholder.typicode.com/posts/${id}`, new Response(JSON.stringify(data)));
              getPosts()
            }
          } catch (error) {
            alert("l'article n'est pas en cache");
            navigate(-1);
          }
    }

    return (
        <div className='container place-content-center mx-auto flex flex-wrap p-10'>
            <CardComponent id={Posts.id} title={Posts.title} body={Posts.body} />
        </div>
    )
}

export default Article