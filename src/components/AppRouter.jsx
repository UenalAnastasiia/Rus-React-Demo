import React, { Fragment } from 'react';
import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import { publicRoutes, privateRoutes } from '../router';

const AppRouter = () => {
    const isAuth = false;

    return (
        <Fragment>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route key={route.element}
                            element={<route.element />}
                            path={route.path}
                            exact={route.exact} />
                    )}
                </Routes>

                :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route key={route.element}
                            element={<route.element />}
                            path={route.path}
                            exact={route.exact} />
                    )}
                </Routes>
            }
        </Fragment>
    );
};

export default AppRouter;