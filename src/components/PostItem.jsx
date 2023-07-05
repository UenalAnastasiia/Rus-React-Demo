import React from 'react';
import '../styles/App.css';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {

    return (
        <div>
            <div className="App">
                <div className="post">
                    <div className="post__content">
                        <strong>{props.post.id}. {props.post.title}</strong>
                        <div>{props.post.body}</div>
                    </div>

                    <div>
                        <MyButton onClick={() => props.remove(props.post)}>
                            Löschen
                        </MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;