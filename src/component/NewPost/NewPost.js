import React, { Component } from 'react';
import classes from './NewPost.module.css';
import random_image from './../../image/random_image.png'

class NewPost extends Component{

    state = {
        like: 0,
        comment : 0,
        share: 0
    }

    likeClickHandler = () => {
        this.setState({like: this.state.like + 1});
    }
    commentClickHandler = () => {
        this.setState({comment: this.state.comment + 1});
    }
    shareClickHandler = () => {
        this.setState({share: this.state.share + 1});
    }

    render(){
         const content = <p>
            The standard Lorem Ipsum passage, used since the 1500s
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Section 1.10.32
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>

        return(
            <div className = {classes.NewPost}>
                <div className = { classes.Write_NewPost_Section}>
                    <div>
                        {/* Profile photo */}
                        <img className = {classes.img}  src ={random_image} alt="profile_picture"/>
                    </div>

                    <div>
                        {/* Name */}
                        <h3>Monit Roy</h3>

                        {/* Content */}
                        {content}
                        
                        <div>
                            {/* Count_Like, Count_Comment, Share_count */}
                            {this.state.like} Likes 
                            {this.state.comment} Comments 
                            {this.state.share} Share 
                        </div>

                        <div>
                            {/* Like ,Comment ,Share Button */}
                            <button onClick={this.likeClickHandler}>Like</button>
                            <button onClick={this.commentClickHandler}>Comment</button>
                            <button onClick={this.shareClickHandler}>Share</button>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}

export default NewPost;