import User from "../../src/entities/User";
import UsersRepository from "../../src/repositories/UsersRepository";
import UserFactory from "../factories/User";


export default class UsersRepositoryFake extends UsersRepository {
  users: User[]

  constructor() {
    super();
    this.users = UserFactory.buildList(1);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
