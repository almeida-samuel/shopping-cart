import User from "../../src/entities/User";

describe("User", () => {
  describe("attributes", () => {
    describe("cpf", () => {
      it("should throw an error when cpf is invalid", () => {
        expect(() => new User("99999999999", "74690020")).toThrowError(new Error("Invalid CPF"));
      });

      it("should instantiates an user when cpf is valid", () => {
        const user = new User("00170448045", "74690020");
        expect(user).toBeDefined();
      });
    });
  });
});
