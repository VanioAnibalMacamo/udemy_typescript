import { NotFoundError } from "../errors/not-found.error.js";
import { UserRepository } from "../repositories/user.repository.js";
import { AuthService } from "./auth.service.js";
export class UserService {
    userRepository;
    authService;
    constructor() {
        this.userRepository = new UserRepository();
        this.authService = new AuthService();
    }
    async getAll() {
        return this.userRepository.getAll();
    }
    async getById(userId) {
        const user = await this.userRepository.getById(userId);
        if (!user) {
            throw new NotFoundError("User not found");
        }
        return user;
    }
    async save(user) {
        const userAuth = await this.authService.create(user);
        user.id = userAuth.uid;
        await this.userRepository.update(user);
    }
    async update(userId, user) {
        const _user = await this.userRepository.getById(userId);
        if (!_user) {
            throw new NotFoundError("User not found");
        }
        _user.name = user.name;
        _user.email = user.email;
        await this.authService.update(userId, user);
        await this.userRepository.update(_user);
    }
    async delete(userId) {
        await this.authService.delete(userId);
        await this.userRepository.delete(userId);
    }
}
//# sourceMappingURL=user.service.js.map