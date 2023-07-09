import React, { Fragment } from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<About />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </Fragment>
    );
};

export default AppRouter;