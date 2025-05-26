import { User } from "../models/user.model";
import { NotFoundError } from "../errors/not-found.error";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async getById(userId: string): Promise<User> {
    const user = await this.userRepository.getById(userId);

    if (!user) {
      throw new NotFoundError("User not found");
    }
    return user;
  }

  async save(user: User) {
    await this.userRepository.save(user);
  }

  async update(userId: string, user: User) {
    const _user = await this.userRepository.getById(userId);
    
    if (!_user) {
      throw new NotFoundError("User not found");
    }

    _user.name = user.name;
    _user.email = user.email;

    this.userRepository.update(_user);
  }

  async delete(userId: string) {
   await this.userRepository.delete(userId);
  }
}
