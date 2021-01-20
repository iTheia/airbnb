import React, { useContext, useEffect } from "react";
import { Loader } from "../components/Loader";
import { AppContext } from "../providers/App";
import { AuthContext } from "../providers/Auth";
import { AuthRoutes } from "./auth";
import { UserRoutes } from "./user";

export const Router: React.FC = () => {
    const { isLoading } = useContext(AppContext);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {}, [currentUser]);
    if (isLoading) {
        return <Loader />;
    }
    if (currentUser === false) {
        return <AuthRoutes />;
    }

    return <UserRoutes />;
};
