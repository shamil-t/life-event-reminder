export interface UserType {
    id?: number;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    password?: string;
    designation: string;
    profileImg: string;
    mangerId: number;
    manager?: UserType
}

export interface ResponseUserType {
    data: UserType[] | UserType;
    status: string
}