import User from "../entities/User";

export interface UsersRepositoryInterface {
  getByCPF(id: string): Promise<User>
}

export default class UsersRepository implements UsersRepositoryInterface {
  users: User[]
  constructor() {
    this.users = [
    ];
  }

  getByCPF(cpf: string): Promise<User> {
    return new Promise((resolve, reject) => {
      const item = this.users.find((e) => e.cpf === cpf);
      item ? resolve(item) : reject(new Error("User CPF not found"));
    });
  }
}
