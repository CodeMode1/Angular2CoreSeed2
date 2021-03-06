﻿export interface IUser {
    userName: string;
    email: string;
    password: string;
}

export class User {
    constructor(public userName: string, public email: string, public password: string) {}
}