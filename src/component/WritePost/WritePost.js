import React, { Component } from 'react';
import random_image from './../../image/random_image.png'
import classes from './WritePost.module.css';

class WritePost extends Component{
    render(){
        return(
            <div className={classes.Write_Post_Section}>    
                {/* Profile photo */}
                <div>
                    <img className = {classes.img} src ={random_image} alt="profile_picture"/>
                </div>

                <div>
                    {/* Text box -> Whats happening */}
                    <div>
                        <textarea placeholder='Whats Happening' rows='4' cols = '50' />
                    </div>

                    {/* Post button */}
                    <div>
                        <button>Post</button>
                    </div>
                </div>

        </div>
        )
    }
}

export default WritePost;