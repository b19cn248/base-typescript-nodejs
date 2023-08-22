// src/users/usersService.ts
import { User } from "./user";
import {UUID} from "./datatype";
import { v4 as uuidv4 } from 'uuid';

// A post request should not contain an id.
export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UsersService {
    public get(id: UUID, name?: string): User {
        return {
            id: id,
            email: "jane@doe.com",
            name: name ?? "Jane Doe",
            status: "Happy",
            phoneNumbers: [],
        };
    }

    public create(userCreationParams: UserCreationParams): User {
        return {
            id: uuidv4(),
            status: "Happy",
            ...userCreationParams,
        };
    }
}