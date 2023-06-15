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

    function getPosts(): void {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(data => {
                setPosts(data.data)
            })
            .catch(e => {
                alert("l'article n'est pas en cache");
                navigate(-1);
            })
    }

    return (
        <div className='container place-content-center mx-auto flex flex-wrap p-10'>
            <CardComponent id={Posts.id} title={Posts.title} body={Posts.body} />
        </div>
    )
}

export default Article