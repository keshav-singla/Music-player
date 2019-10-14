import React from 'react'
import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Appbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search : '',
            username : '',
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        console.log(this.state.search);
        return (
            <div  >
                <AppBar position="static" color="primary" >
                    <Toolbar>
                        <IconButton edge="start"  color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <input 
                            name = 'search'
                            placeholder= 'Search'
                            type = 'text'
                            value = {this.state.search}
                            onChange = {this.handleChange}
                            autoComplete = 'off'
                        />
                    </Toolbar>  
                </AppBar>
            </div>
        )
    }
}

export default Appbar;