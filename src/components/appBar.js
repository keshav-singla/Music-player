import React from 'react'
import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Appbar extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {

        }
    }

    render() {
        return (
            <div  >
                <AppBar position="static" color="primary" >
                    <Toolbar>
                        <IconButton edge="start"  color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    
                </AppBar>
            </div>
        )
    }
}

export default Appbar;