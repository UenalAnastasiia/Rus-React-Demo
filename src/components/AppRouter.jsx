import React, { Fragment, useContext } from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';

const AppRouter = () => {
    const { isAuth } = useContext(AuthContext);

    return (
        <Fragment>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route key={route.path}
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