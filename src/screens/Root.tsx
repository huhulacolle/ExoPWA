import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'

function Root() {
    return (
        <div className='m-0 bg-slate-300'>
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
            <Outlet />
        </div>
    )
}

export default Root