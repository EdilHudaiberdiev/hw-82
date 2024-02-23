export interface UserFields{
    username: string;
    password: string;
    token: string;
}

interface UserMethods {
    checkPassword(password: string): Promise<boolean>;
    generateToken(): void;
}

export interface IUser {
    _id: string;
    username: string;
    token: string;
}

type UserModel = Model<UserFields, {}, UserMethods>;