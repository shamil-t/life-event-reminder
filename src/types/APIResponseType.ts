import { LifeEventType } from "./LifeEventType";
import { UserType } from "./UserType";

export interface APIResponseType {
    status: "success" | "failure";
    data: UserType | LifeEventType | string | null;
}