export interface UserType {
    id?: number;
    fName: string;
    lName: string;
    email: string;
    phone: string;
    password?: string;
    designation: string;
    profileImg: string;
    mangerId: number;
    manager?: UserType
}