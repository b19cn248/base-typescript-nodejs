// src/users/usersController.ts
import {
    Body,
    Controller, Example,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse, Tags,
} from "tsoa";
import { User } from "./user";
import { UsersService, UserCreationParams } from "./usersService";
import {UUID} from "./datatype";

@Route("users")
@Tags("users")
export class UsersController extends Controller {
    /**
     * Retrieves the details of an existing user.
     * Supply the unique user ID from either and receive corresponding user details.
     * @param userId The user's identifier
     * @param name Provide a username to display
     */
    @Example<User>({
        id: "52907745-7672-470e-a803-a2f8feb52944",
        name: "tsoa user",
        email: "hello@tsoa.com",
        phoneNumbers: [],
        status: "Happy",
    })
    @Get("{userId}")
    public async getUser(
        @Path() userId: UUID,
        @Query() name?: string
    ): Promise<User> {
        return new UsersService().get(userId, name);
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(
        @Body() requestBody: UserCreationParams
    ): Promise<any> {
        this.setStatus(201); // set return status 201
        return new UsersService().create(requestBody);
    }
}