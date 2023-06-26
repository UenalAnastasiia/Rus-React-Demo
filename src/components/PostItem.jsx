import React from 'react';
import '../styles/App.css';

const PostItem = (props) => {

    return (
        <div>
            <div className="App">
                <div className="post">
                    <div className="post__content">
                        <strong>{props.number}. {props.post.title}</strong>
                        <div>{props.post.body}</div>
                    </div>

                    <div>
                        <button>Löschen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;