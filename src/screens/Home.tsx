import React, { useEffect, useState } from 'react'
import { IPost } from '../interfaces/IPost';
import axios from 'axios';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import CardComponent from '../components/CardComponent';
import { Link } from 'react-router-dom';

function Home() {
    const [Posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPosts();
    }, [])


    function getPosts(): void {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(data => {
                setPosts(data.data)
            })
            .catch(e => {
                alert(e);
            })
    }

    return (
        <div className='container place-content-center mx-auto flex flex-wrap p-10'>
            {Posts.map(p => (
                <Link to={`/article/${p.id}`}>
                    <CardComponent id={p.id} title={p.title} body={p.body} />
                </Link>
            ))}
        </div>
    )
}

export default Home