// eslint-disable-next-line no-unused-vars
import { register, validate } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    const username = "mocked username";
    const password = "mock password";
    const result = register(username, password);
    // eslint-disable-next-line jest/valid-expect
    expect(result).resolves.toContain("success");
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const username = "mocked username";
    const password = "mock password";
    await expect(register(username, password)).rejects.toThrowError(
      "wrong username or password"
    );
  });
});
