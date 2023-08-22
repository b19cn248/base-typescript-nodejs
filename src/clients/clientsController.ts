import {Controller, Get, Route, Tags} from 'tsoa';
import UserService from "./clientsService";

@Route('clients')
@Tags('clients')
export class ClientController extends Controller {
    private userService: UserService = new UserService();

    @Get()
    public async getClients(): Promise<any> {
        try {
            const clients = await this.userService.list();
            return clients;
        } catch (error) {
            this.setStatus(500);
            return [];
        }
    }
}
