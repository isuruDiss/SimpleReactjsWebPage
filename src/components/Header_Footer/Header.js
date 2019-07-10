import React, { Component } from 'react';
import ToolBar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from '../NavigationBar/SideDrawer'


class Header extends Component {
    state={
        openDrawer:false
    }

    toggleNav = (value) =>{

        this.setState({
            openDrawer:value,
            TransNav : false
        })

    }

    componentDidMount(){
        window.addEventListener('scroll',this.scrolling);
        
    }

    scrolling =()=>{
        if(window.scrollY>0){

            this.setState({
                TransNav : true
            });
        }
        else{

            this.setState({
                TransNav : false
            })

        }
        
    }
    render() {
        return (
            <AppBar position='fixed' 
            style={{
                backgroundColor: this.state.TransNav?'#2f2f2f' : 'Transparent',
                boxShadow:'none',
                padding:'10px 0px'
                }}> 
                <ToolBar>
                    <div className='header_logo'>
                        <div className='font_righteous'> The Venue</div>
                        <div className='header_logo_title'> Musical Events</div>    
                    </div>
                
                    <IconButton aria-label="Menu" color ="inherit" onClick ={()=>this.toggleNav(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <SideDrawer open={this.state.openDrawer} onClose={(value)=>this.toggleNav(value)}/> 

                </ToolBar>
            </AppBar>
        );
    }
}

export default Header;