import { HomePage } from "../../pages/Home";
import { IRoute } from "../types";

export const routes: IRoute[] = [
    { path: "/", component: HomePage, exact: true },
];
