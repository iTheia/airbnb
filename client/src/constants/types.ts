export type roles = "basic" | "advanced" | "expert";

export interface IUser {
    name: string;
    avatar: string;
    role: roles;
}
