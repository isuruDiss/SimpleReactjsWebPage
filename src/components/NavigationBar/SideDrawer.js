import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


const SideDrawer = (props) => {
    return (
        <Drawer 
        anchor ='right' 
        open={props.open}
        onClose={()=>props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={()=>console.log('featerued')}>
                    Event Starts in 
                </ListItem>
                <ListItem button onClick={()=>console.log('featerued')}>
                    Venue info
                </ListItem>
                <ListItem button onClick={()=>console.log('featerued')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={()=>console.log('featerued')}>
                    Pricing  
                </ListItem>
                <ListItem button onClick={()=>console.log('featerued')}>
                    Location 
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;