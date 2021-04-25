import React, { Component } from 'react';
import classes from './Feed.module.css';
import NewPost from './../NewPost/NewPost';
import WritePost from './../WritePost/WritePost';

class Feed extends Component{
    

    render(){
        return(
                <div className={classes.Feed}>
               
                    {/* heading -> Home */}
                    <div className = {classes.Feed__heading}>
                        <h3>Home</h3>
                    </div>

                    <WritePost />
                    
                    <NewPost />
                    <NewPost />
                    <NewPost />
                </div>
            
        )
    }
}

export default Feed;