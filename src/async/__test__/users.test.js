import getUsers from "../users";
// TODO feedback: axios是我们装的node module, 不是我们自己写的module, 它的mock文件要放在src/下面

jest.mock("axios");
describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const result = getUsers();
    // TODO feedback: 没必要测被调用的次数，因为你都测调用的返回值

    // expect(mockAxios.get).toBeCalledTimes(1);
    await expect(result).resolves.toEqual({});
  });
});
