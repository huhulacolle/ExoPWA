import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardComponent from './components/CardComponent'
import { IPost } from './interfaces/IPost'
import axios from 'axios'

function App() {

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
    <div >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Infos
          </Typography>
          <Button color="inherit" onClick={() => alert("feur")}>Quoi ?</Button>
        </Toolbar>
      </AppBar>
      <div style={{
        display: 'flex',
        maxWidth: '100%', 
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        gap: '3',
             
      }}>
        {Posts.map(p => (
          <CardComponent id={p.id} title={p.title} body={p.body} />
        ))}
      </div>
    </div>
  )
}

export default App