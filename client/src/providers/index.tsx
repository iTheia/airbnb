import { ThemeProvider } from "@material-ui/core";
import React, { Fragment } from "react";
import { Router } from "../routes";
import { AppProvider } from "./App";
import { AuthProvider } from "./Auth";
import { theme } from "./Theme";

export const Providers: React.FC = () => {
    return (
        <Fragment>
            <AppProvider>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <Router />
                    </ThemeProvider>
                </AuthProvider>
            </AppProvider>
        </Fragment>
    );
};
