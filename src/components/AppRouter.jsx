import React, { Fragment } from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import { routes } from '../router';

const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                {routes.map(route =>
                    <Route key={route.element}
                        element={<route.element />}
                        path={route.path}
                        exact={route.exact} />
                )}
            </Routes>
        </Fragment>
    );
};

export default AppRouter;