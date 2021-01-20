import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes";

export const AuthRoutes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            {routes.map((route) => (
                <Route {...route} />
            ))}
        </Switch>
    </BrowserRouter>
);
