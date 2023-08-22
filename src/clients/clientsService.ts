import Client from "./client";

class UserService {
    async list(): Promise<any> {
        try {
            const clients = await Client.findAll();
            return clients;
        } catch (error) {
            throw new Error(`Không thể lấy danh sách clients`);
        }
    }
}

export default UserService;
