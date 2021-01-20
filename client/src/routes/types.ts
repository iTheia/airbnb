import { RouteComponentProps } from "react-router-dom";

export interface IRoute {
    path: string | string[];
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
    exact?: boolean;
}
