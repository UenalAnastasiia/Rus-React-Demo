import React from 'react';
import '../styles/App.css';

const PostItem = (props) => {
    console.log(props);
    
    return (
        <div>
            <div className="App">
                <div className="post">
                    <div className="post__content">
                        <strong>1. Javascript</strong>
                        <div>Javascript ist eine Programmiersprache</div>
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