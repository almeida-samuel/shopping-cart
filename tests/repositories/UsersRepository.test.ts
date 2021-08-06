import UsersRepository from "../../src/repositories/UsersRepository";
import UserFactory from "../factories/User";

describe("UsersRepository", () => {
  describe("methods", () => {
    describe("getByCPF", () => {
      it("should returns the coupon for the provided code", () => {
        const repository = new UsersRepository();
        const user = UserFactory.build();

        repository.users = [user];
        expect(repository.getByCPF(user.cpf)).resolves.toStrictEqual(user);
      });

      it("should returns undefined for an not found code", () => {
        const repository = new UsersRepository();
        expect(repository.getByCPF("-1")).rejects.toThrow("User CPF not found");
      });
    });
  });
});
